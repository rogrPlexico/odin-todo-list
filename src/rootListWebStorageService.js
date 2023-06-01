import { getRootList } from "./listHandler";
import * as webStorageService from "./webStorageService";

export function storeRootList() {
    let rootList = getRootList();
    webStorageService.storeList(rootList);
}

export function getStoredRootList() {
    webStorageService.getStoredList('rootList');
}