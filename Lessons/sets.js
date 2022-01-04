let uniqueLanaguages = new Set();

uniqueLanaguages.add('Java');
uniqueLanaguages.add('JavaScript');
uniqueLanaguages.add('Python');
uniqueLanaguages.add('C#');

uniqueLanaguages.delete('C#');
uniqueLanaguages.has('Java');

// for (let n of uniqueLanaguages) {
//     console.log(n);
// }

const setObj = new Set();
const obj = {a:1, b: 2}
setObj.add(obj);
setObj.add(obj);

console.log(setObj);