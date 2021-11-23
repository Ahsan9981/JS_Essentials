let bankBalance = 1120;
let overDrawn  = bankBalance < 0;

if (overDrawn) {

    console.log('You are overdrawn.');
    console.log('Please reconcile your bank account.');

} else if (bankBalance > 1000) {

    console.log('You have loads of cash.');

} else {
    console.log('You are in credit.');
}