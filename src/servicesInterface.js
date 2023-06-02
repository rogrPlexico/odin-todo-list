// This file is an interface between runtime and storage+display

import * as webStorageService from "./webStorageService";
// import * as rootListWebStorageService from "./rootListWebStorageInterface";
import * as listHandler from "./listHandler";
import { addTaskToRTMList } from "./taskHandler";
import * as displayService from "./displayService";

export function addTask(listId, taskTitle, taskDescription, taskDueDate, taskPriortity, project) {
    let task = addTaskToRTMList(listId, taskTitle, taskDescription, taskDueDate, taskPriortity, project);
    displayService.renderList(listId);
    // storeRootList();
}

//** rootList interface**

export function createRootList() {
    listHandler.createRTMList('rootList');
    displayService.renderList(0);
}

export function getRootList()  {
    let rootList = listHandler.getList(0);
    return rootList;
}

export function storeRootList() {
    let rootList = servicesInterface.getRootList();
    webStorageService.storeListToWeb(rootList);
}

export function getStoredRootList() {
    webStorageService.getListFromWebStore('rootList');
}