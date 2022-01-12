// My Solution
const getFileExtension1 =(filename) => filename.split('.')[1];
console.log(getFileExtension1('Ahsan.png'));

// Instructor's Solution
const getFileExtension2 =(filename) => filename.slice(filename.lastIndexOf('.'));
console.log(getFileExtension2('Ahsan.png'));