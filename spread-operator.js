// Spread operator with arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const add = (a, b, c) => a + b + c;

console.log(add(...array1));

const array3 = [...array1, ...array2, 7, 8, 9];

console.log(array3);

// Spread operator with objects.
const obj1 = { username: 'ahsan' };
const obj2 = { password: '12345' };

console.log(Object.assign({}, obj1, obj2));

const obj3 = { ...obj1, ...obj2, admin: true };

console.log(obj3);

const copyOfObj1 = { ...obj1 };
obj1.username = 'admin';
console.log(copyOfObj1);
console.log(obj1);