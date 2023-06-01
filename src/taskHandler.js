import { getRootList } from "./listHandler";
import { stprint } from "./index.js";

let taskIDIterator = 0;

// creates task and returns it. Does not add task to rootList
function createTask(taskTitle, taskDescription, taskDueDate, taskPriortity, project) {
    // let rootList = getRootList();
    // let rootListPrototype = Object.getPrototypeOf(rootList);
    let task = Object.create(createTask.proto);
    
    // _underscored properties should not be accessed directly
    task._taskID = taskIDIterator++;
    task._taskTitle = taskTitle;  
    task._taskDescription = taskDescription;
    task._taskDueDate = taskDueDate;
    task._taskPriority = taskPriortity;
    task._project = project;

    return task;
}

createTask.proto = {
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

export function getCreateTaskProto() {
    return createTask.proto;
}

// add task to rootList
export function addTask(taskTitle, taskDescription = null, taskDueDate = null, taskPriortity = 3, project = 'default') {
    let newTask = createTask(taskTitle, taskDescription, taskDueDate, taskPriortity, project);
    let taskID = newTask._taskID;
    // object is stored under taskID as key/name
    let rootList = getRootList();
    rootList[taskID] = newTask;
    return newTask;
}

export function getTask(taskID) {
    return getRootList()[taskID];
}

export function removeTask(taskID) {
    let rootList = getRootList();
    delete rootList[taskID];
}


