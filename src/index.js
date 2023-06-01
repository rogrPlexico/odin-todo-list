import * as listHandler from "./listHandler";
import * as taskHandler from  "./taskHandler";
// import * as taskModifier from "./taskModifier.js";
import * as webStorageService from "./webStorageService";
import * as rootListWebStorageService from "./rootListWebStorageService";


// ****STATIC PRINT FUNCTION FOR DEBUGGING (prints objects statically instead of passing by reference for debugging purposes)******to delete*****
export function stprint (x) {
    let strung = JSON.stringify(x);
    console.log(JSON.parse(strung));   
}
///////////////

listHandler.createRootList();

// example add tasks to root list 
//INTERFACE NEEDS TO BE ADDED to combine (addTask = addTask + storeList)
taskHandler.addTask('Do dishes', undefined, undefined, 2, undefined);
rootListWebStorageService.storeRootList();

taskHandler.addTask('ducks');
rootListWebStorageService.storeRootList();

taskHandler.addTask('what');
rootListWebStorageService.storeRootList();

// example get task
let task0 = taskHandler.getTask(0);
task0.setProject('Tortles');
stprint(task0);

let task2 = taskHandler.getTask(2);
task2.setTaskPriority(1);

// storageService.storeRootList(rootList);

let retrievedList = rootListWebStorageService.getStoredRootList();

// listHandler.updateRootList(retrievedList);

let gotRoot = listHandler.getRootList();




gotRoot[0].setProject('web api done not fucked it up');
let x = listHandler.getRootList();

taskHandler.removeTask(1);

 console.log(listHandler.getRootList());


// storageService.retrieveRootListFromStorage();




