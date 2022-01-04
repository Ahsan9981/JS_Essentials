function* generator(i) {

    console.log('Generator Started');
    yield 10;
    console.log('Next Value');
    yield i;
    console.log('Generator Ended');
    return 100;
}

const gen = generator(20);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* makeId() {
    
    let index = 0;

    while (true) {
        yield index;
        index++;
    }

}

const IdGenerator = makeId();

console.log(IdGenerator.next().value);
console.log(IdGenerator.next().value);
console.log(IdGenerator.next().value);
console.log(IdGenerator.next().value);