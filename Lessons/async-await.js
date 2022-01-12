async function getRandomNumber() {

    try {
        let promise = new Promise((resolve, reject) => {

            const random = Math.random() * 2000;
            // console.log(random)

            setTimeout(() => {

                (random > 500)? resolve(random) : reject(random)

            }, random);
        });

        let result = await promise;
        console.log(result);
    
    } catch (error) {
        console.log('An error occured');    
    }

}


getRandomNumber();