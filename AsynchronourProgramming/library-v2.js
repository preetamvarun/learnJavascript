class HTTP{

    getData(url){
        return new Promise((resolve,reject) => 
        fetch(url).then(msg => msg.json())
        .then(todos => resolve(todos))
        .catch(err => reject(err)))
    }

    postData(url,data){
        return new Promise((resolve,reject) => fetch(url,{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(msg => resolve(msg.json()))
        .catch(err => reject(err)))
    }

    updateData(url,data){
        return new Promise((resolve,reject) => fetch(url,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(msg => resolve(msg.json()))
        .catch(err => reject(err)))
    }

    deleteData(url){
        return new Promise((resolve,reject) => fetch(url,{
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            },
        }).then(msg => msg.json())
        .then(() => resolve('ITEM DELETED'))
        .catch(err => reject(err)))
    }
}