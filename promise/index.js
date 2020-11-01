const somethingWillHappen =() => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!We do it');
        } else {
            reject('Whoops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error ('Whoop!');
            reject (error);
        }
    }); 
}

somethingWillHappen2()
.then(response => console.log(response))
.catch( err => console.log(err));

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
        .then (response => {
            console.log('Array of results', response);  
        })
        .catch(err =>{
            console.log('No funciono', err)
        })