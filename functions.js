function SayHi(name) {
    console.log(`Hi ${name}`);
}


const SayHello = function(name) {
    console.log(`Hello ${name}`);
}

const Greetings = (guest) => {
    console.log(`Greetings ${guest}`);
}

SayHi('Ahsan');
SayHello('Ahsan');
Greetings('Ahsan');

setTimeout(() => {
    console.log('Hello World');
}, 2000);
