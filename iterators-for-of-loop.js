// let marks = [10,20,30]
//    let iter = marks[Symbol.iterator]();
//    console.log(iter);
//    console.log(iter.next());
//    console.log(iter.next());
//    console.log(iter.next());
//    console.log(iter.next());

const fizzBuzz = {

   [Symbol.iterator]() {

      let i = 0;

      return {

         next() {
            i += 1;
            return {
               done: i >= 100,
               value: (i % 5 === 0 && i % 3 === 0)? 'FizzBuzz' : (i % 3 == 0)? 'Fizz': (i % 5 == 0)? 'Buzz' : i
            }
         }


      }

   }

};

for (let n of fizzBuzz) {
   console.log(n);
}