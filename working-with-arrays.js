let arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayOfMonths = ['Jan', 'Feb', 'Mar', 'Apr'];

console.log(arrayOfNumbers);
console.log(arrayOfMonths);

console.log(arrayOfNumbers.length);
console.log(arrayOfMonths.length);

arrayOfNumbers.pop();
arrayOfMonths.pop();

console.log(arrayOfNumbers);
console.log(arrayOfMonths);

arrayOfNumbers.shift();
arrayOfMonths.shift();

console.log(arrayOfNumbers);
console.log(arrayOfMonths);

arrayOfNumbers.unshift(0);
arrayOfNumbers.push(10);

arrayOfMonths.unshift('Jan');
arrayOfMonths.push('Dec');

console.log(arrayOfNumbers);
console.log(arrayOfMonths);