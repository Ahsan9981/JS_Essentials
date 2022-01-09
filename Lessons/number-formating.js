const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

const value = 12345678.90;

console.log(formatter.format(value));