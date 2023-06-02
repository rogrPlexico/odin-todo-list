import './style.css';

import * as listHandler from "./listHandler";
import * as taskHandler from  "./taskHandler";
import * as webStorageService from "./webStorageService";
import * as servicesInterface from "./servicesInterface";
import * as displayService from "./displayService";


// ****STATIC PRINT FUNCTION FOR DEBUGGING (prints objects statically instead of passing by reference for debugging purposes)******to delete*****
export function stprint (x) {
    let strung = JSON.stringify(x);
    console.log(JSON.parse(strung));   
}
///////////////

servicesInterface.createRootList();


// example add tasks to root list 
servicesInterface.addTask(0, 'Do dishes', undefined, undefined, 2, undefined);
servicesInterface.addTask(0, 'ducks');
servicesInterface.addTask(0, 'what');

// // example get task
// let task0 = taskHandler.getTask(0);
// task0.setProject('Tortles');

// let task2 = taskHandler.getTask(2);
// task2.setTaskPriority(1);

// // storageService.storeRootList(rootList);

// let retrievedList = servicesInterface.getStoredRootList();

// // listHandler.updateRootList(retrievedList);

// let gotRoot = listHandler.getRootList();




// gotRoot[0].setProject('web api working');
// let x = listHandler.getRootList();

// taskHandler.removeTask(1);

// // listHandler.createList('otherStuff')





// // storageService.retrieveRootListFromStorage();




