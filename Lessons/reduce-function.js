const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((accumulator, value) => accumulator + value);
console.log(`sum = ${sum}`);

const average = euros.reduce((accumulator, value, index, array) => {
    accumulator += value;
    return (index === array.length-1)? accumulator/array.length : accumulator;
});

console.log(`average = ${average}`);

const halvesSums = euros.reduce((accumulator, value, index, array) => {
    accumulator += value
    return accumulator/array.length;
  }, 0);


  console.log(halvesSums);

  const doubledArray = euros.reduce((accumulator, value, index, array) => {
    accumulator.push(value * 2);
    return accumulator;
  }, []);

  console.log(doubledArray);

  const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

  const count = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
  }, {});

  console.log(count);

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

console.log(flat);

const data1 = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data1.reduce((total, amount) => {
    amount.c.forEach( color => {
        total.push(color);
    })
    return total;
  }, []);

  console.log(colors);

function increment(input) { return input + 1;}

function decrement(input) { return input - 1; }

function double(input) { return input * 2; }

function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
    return func(total);
}, 1);

console.log(result);