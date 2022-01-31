class Data {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // MAKE GET REQUEST 
    fetchData(url, callback) {
        this.xhr.open('GET', url, true);
        let outerScope = this;
        this.xhr.onload = function () {
            if (outerScope.xhr.status === 200) {
                callback(null, JSON.parse(outerScope.xhr.responseText));
            } else {
                callback('ERROR : ', outerScope.xhr.status);
            }
        };

        this.xhr.send();
    }
    
    // MAKE A HTTP DELTE REQUEST 
    deleteData(url, callback) {
        this.xhr.open('DELETE', url, true);
        let outerScope = this;
        this.xhr.onload = function () {
            if (outerScope.xhr.status === 200) {
                callback(null, 'POST DELETED');
            } else {
                callback('ERROR : ', outerScope.xhr.status);
            }
        };
        this.xhr.send();
    }

    // MAKE A HTTP POST REQUEST 
    addNewData(url, data, callback) {
        this.xhr.open('POST', url, true);
        this.xhr.setRequestHeader('Content-type', 'application/json');
        let self = this;
        this.xhr.onload = function () {
            callback(null, self.xhr.responseText);
        };
        this.xhr.send(JSON.stringify(data));
    }

    // MAKE A HTTP PUT REQUEST 
    updateData(url, data, callback) {
        this.xhr.open('PUT', url, true);
        this.xhr.setRequestHeader('Content-type', 'application/json');
        let self = this;
        this.xhr.onload = function () {
            callback(null, self.xhr.responseText);
        };
        this.xhr.send(JSON.stringify(data));
    }
}








