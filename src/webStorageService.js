// this module handles storage of list objects in browser Web Storage API

import { createRTMList } from "./listHandler";
import { getCreateTaskProto } from "./taskHandler";

export function storeListToWeb(listObj) {
    let strungObject = JSON.stringify(listObj);
    localStorage.setItem('rootList', strungObject);
}

export function getListFromWebStore(key) {
    let strungList = localStorage.getItem(key);
    let parsedList = JSON.parse(strungList);
    
    // add back prototype for tasks (excepting the nested 'properties' object)
    for (let task in parsedList) {
        if (task !== 'properties') {
            let taskObj = parsedList[task];
            Object.setPrototypeOf(taskObj, getCreateTaskProto());
        }
    }

    // add back prototype for list
    let rootList = Object.create(createRTMList.proto);
    Object.assign(rootList, parsedList);

    return rootList;
}

export function removeListFromStorage(listKey) {
    localStorage.removeItem(listKey);
}
