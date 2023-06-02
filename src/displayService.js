import * as listHandler from "./listHandler"; 


export function renderList(listId) {
    let list = listHandler.getList(listId);
    console.log('list');
    console.log(list);
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let h1 = document.createElement('h1');
    h1.textContent = list.getListName(listId);
    content.appendChild(h1);

    let ul = document.createElement('ul');
    ul.classList.add('list');
    content.appendChild(ul);

    //if list has items, render items
    if (Object.keys(list).length > 0) {
        loopTasks(list);
    }

    
    // content.appendChild(ul);

    // let newUL = loopTasks(list);
    
    
    // if (!listId) renderList(dummyList);
}

function loopTasks(list) {
    for (let i in list) {
        if (list.hasOwnProperty(i)) {
            let taskDescription = list[i].getTaskDescription();
            console.dir(list[i])
            renderTask(taskDescription);
        }
    }
}

//inside top level of loop function
let inputLabelConnectorNumber = 0;
//inside top level of loop function

export function renderTask(taskName) {
    let content = document.querySelector('.content');
    let li = document.createElement('li');
    li.draggable = "true";

    let inputLabelConnector = "label-" + inputLabelConnectorNumber;
    inputLabelConnectorNumber++;

    let label = document.createElement('label');
    label.classList.add('task');
    label.setAttribute('for', inputLabelConnector);
    li.appendChild(label);    
    
    let input = document.createElement('input');
    input.classList.add('checkbox');
    input.type="checkbox";
    input.id=inputLabelConnector;
    label.appendChild(input);
    
    let span = document.createElement('span');
    span.classList.add('task-title');
    span.textContent = taskName;
    label.appendChild(span);

    let ul = document.querySelector('ul');
    ul.appendChild(li);
    content.appendChild(ul);

}