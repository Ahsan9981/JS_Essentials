let daysOfWeek = [ 
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

let today = daysOfWeek[6];

switch (today) {
    case 'Saturday':
        console.log('Go for shopping.');
        break;

    case 'Sunday':
        console.log('Take rest.');
        break;

    default:
        console.log('Go to work.');
        break;
}