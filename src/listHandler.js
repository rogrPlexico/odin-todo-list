import * as displayService from "./displayService";

let rootList;
let listIdIterator = 0;
let listArray = [];
let rootListCreatedBool = false;

export function createRTMList(listName) {

    // conditional statement pervents creation of more than one list with listName 'rootList'
    if (rootListCreatedBool == true && listName == 'rootList') {
        console.error('rootList is a reserved name');
    } else {
        let list = Object.create(createRTMList.proto);
  
        list.properties = {};
        // make the nested 'properties' object non-enumerable
        Object.defineProperty(list, 'properties', {
            enumerable: false,
        }),
        list.properties._listName = listName;
        let listId = listIdIterator;
        list.properties._listId = listId;

        listIdIterator++;
    
        // if not root list, push to array 
        if (rootListCreatedBool == true) {
            listArray.push(list);
        // if root list:
            // override setName method to prevent name modification, 
            // make the setName method non-enumerable, 
            // flip rootListCreated to true, 
            // store list in rootList variable (rootList is not stored in the array--probably poor design, doing this to practice different techniques for storing objects)
        } else {
            list.setListName = () => console.error('Cannot change the name of rootList');
            Object.defineProperty(list, 'setListName', {
                enumerable: false,
            }),
            rootListCreatedBool = true;
            rootList = list;
            return list;
        }   
    }
}

createRTMList.proto = {
    getList: function() {
        return this;
    },
    getListName: function() {
        return this.properties._listName;
    },
    getListID: function() {
        return this.properties._listId;
    },
    setListName: function(newName) {
        this.properties._listName = newName;
    },
};

export function getListArray() {
    return listArray;
}

export function getList(listId) {
    if (listId == 0) {
        return rootList;
    } else {
        return listArray.find((item) => item.properties._listId == listId);
    }
}

// **rootList functions**




export function updateRootList(updatedRootList) {
    rootList = updatedRootList;
}











