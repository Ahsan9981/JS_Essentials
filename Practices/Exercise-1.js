const checkNumber = (a,b) => {
    return (a === 100 || b === 100)? true : ((a + b)  === 100);
}


const isEqualto100 = (a,b) => a === 100 || b === 100 || (a+b) === 100;

console.log(checkNumber(100, 0));
console.log(checkNumber(50, 50));
console.log(checkNumber(0, 10));