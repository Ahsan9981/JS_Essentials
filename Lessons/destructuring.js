// Array Destructuring.

const [a, b,c] = [1,2,3];

console.log(a, b, c);

const [d, , f] = [4, 5, 6];

console.log(d, f);

const [x] = [1, 2, 3];

console.log(x);

// Object Destructuring.
const response = { username: 'Ahsan', permissions: ['Level1', 'Level2', 'Level3'], password: 'password123' };

const {username, permissions, password} = response;

console.log(username);
console.log(permissions);
console.log(password);