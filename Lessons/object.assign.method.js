const requestTemplate = {
    url: 'localhost:4200',
    params: 'search=test',
    auth: {
        name: 'Ahsan',
        password: 'Love3Brooke'
    }
};

const details = { time: '11:20AM', user: 'Ahsan'};

const newTemplate = Object.assign({}, requestTemplate, details);

requestTemplate.auth.name = 'Zeeshan';

console.log(Object.assign(requestTemplate, details));
console.log(newTemplate);