import { getRootList } from "./servicesInterface";
import { stprint } from "./index.js";

let taskIDIterator = 0;

// creates task and returns it. Does not add task to rootList
function createRTMTask(taskTitle, taskDescription, taskDueDate, taskPriortity, project) {
    // let rootList = getRootList();
    // let rootListPrototype = Object.getPrototyprootList);
    let task = Object.create(createRTMTask.proto);
    
    // _underscored properties should not be accessed directly
    task._taskID = taskIDIterator++;
    task._taskTitle = taskTitle;  
    task._taskDescription = taskDescription;
    task._taskDueDate = taskDueDate;
    task._taskPriority = taskPriortity;
    task._project = project;

    return task;
}

createRTMTask.proto = {
    // accessor functions allow for ability to add logic later (eg, processing, validation, etc)
    getTask: function(taskID) {
        let rootList = getRootList();
        return rootList[taskID];
    },
    getTaskTitle: function() {  
        return this._taskTitle;
    },
    getTaskDescription: function() {
        return this._taskDescription;
    },
    getTaskDueDate: function() {
        return this._taskDueDate;
    },
    getTaskPriority: function() {
        return this._taskPriority;
    },
    getProject: function() {
        return this._project;
    },
    getTaskID: function() {
        return this._taskID;
    },

    setTaskTitle: function(newValue) {  
        this._taskTitle = newValue;
    },
    setTaskDescription: function(newValue) {
        this._taskDescription = newValue;
    },
    setTaskDueDate: function(newValue) {
        this._taskDueDate = newValue;
    },
    setTaskPriority: function(newValue) {
        this._taskPriority = newValue;
    },
    setProject: function(newValue) {
        this._project = newValue;
    },
    setTaskID: function(newValue) {
        this._taskID = newValue;
    }
};

Object.defineProperty(createRTMTask.proto, 'getList', {
    enumerable: false,
    }
)

export function getCreateTaskProto() {
    return createRTMTask.proto;
}

// add task to rootList
export function addTaskToRTMList(listId, taskTitle, taskDescription = null, taskDueDate = null, taskPriortity = 3, project = 'default') {
    let newTask = createRTMTask(listId, taskTitle, taskDescription, taskDueDate, taskPriortity, project);
    let taskID = newTask._taskID;
    // object is stored under taskID as key/name
    let rootList = getRootList();
    rootList[taskID] = newTask;
    return newTask;
}

// export function getTask(listId, taskID) {
//     return getList(listId)[taskID];
// }

// export function removeTask(listId, taskID) {
//     let rootList = getRootList();
//     delete rootList[taskID];
// }


