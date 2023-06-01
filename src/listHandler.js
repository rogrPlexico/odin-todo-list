let rootList;
let listIDIterator = 0;
let listArray = [];

export function createList(listName) {
    // conditional statement prevents creation of more than one list with listName 'rootList'
    if (listName != 'rootList' || (listName == 'rootList' && listIDIterator == 0)) {
        let list = Object.create(createList.proto);
        list.properties = {};
        list.properties._name = listName;
        list.properties._listID = listIDIterator++;
    
        // if not root list, give list method to modify name
        if (list.properties._listID !== 0) {
            list.prototype.setListName = function(newName) {
                this.properties._listName = newName;0
            };
        }
        // if not root list, add to listArray (root list is stored in 'rootList' variable);
        if (list.properties._listID !== 0) {
            listArray.push(list);
        } else {
            return list;
        } 

    }
}

createList.proto = {
    getList: function() {
        return this;
    },
    getListName: function() {
        return this._name;
    },
    getListID: function() {
        return this._listID;
    }
};

export function createRootList() {
    rootList = createList('rootList');
}

export function getRootList() {
    return rootList;
}

export function updateRootList(updatedRootList) {
    rootList = updatedRootList;
}










