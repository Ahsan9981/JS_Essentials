// https://stackoverflow.com/questions/70184088/is-it-possible-to-provide-default-parameters-with-rest-operator#70184211

const sayHi = (greetings = ' Hi', ...names) => {

    names.forEach(item => {
        console.log(`${greetings} ${item}`);
    });

}

sayHi('Hi', 'Ahsan', 'Awais', 'Haseeb');
sayHi('Hello', 'Ahsan', 'Awais', 'Haseeb');
sayHi(undefined, 'Ahsan', 'Awais', 'Haseeb');

const greet = (greeting = "Hi") => (...names) => {
    for (const name of names) {
        console.log(`${greeting} ${name}`);
    }
};

greet()("Ahsan", "Awais", "Haseeb");
greet("Hello")("Ahsan", "Awais", "Haseeb");

const sayHello = (greeting, names) => {
    if (Array.isArray(greeting)) {
        names = greeting;
        greeting = "Hi";
    }
    for (const name of names) {
        console.log(`${greeting} ${name}`);
    }
};

sayHello(["Ahsan", "Awais", "Haseeb"]);
sayHello("Hello", ["Ahsan", "Awais", "Haseeb"]);