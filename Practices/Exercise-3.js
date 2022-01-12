const MoveEachCharacterForward = (input) => input.split('').map(char => String.fromCharCode((char === 'z')? 'a' : char.charCodeAt(0)+1)).join('');


console.log(MoveEachCharacterForward('z')) //bcde