const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Done');
    }, 3000);

});

promise.then(result => console.log(result)).catch(error => console.log(error));


const asyncFunction = () => {

    return new Promise((resolve, reject) => {

        const random = Math.random() * 2000;

        setTimeout(() => {
            
            // (random > 500)?
             resolve(random)
            //  : reject(random)

        }, random);

    });

}

asyncFunction().then(result => console.log(result)).catch(error => console.log(error));

Promise.all([asyncFunction(), asyncFunction(), asyncFunction()]).then(result => console.log(result));
Promise.race([asyncFunction(), asyncFunction(), asyncFunction()]).then(result => console.log(result));
