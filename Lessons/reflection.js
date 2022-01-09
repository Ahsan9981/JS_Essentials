const user = {
    name: 'Ahsan',
    password: 'password123'
};

// Object.defineProperty(user, 'accessLevel', {value: 'admin'});
if (Reflect.defineProperty(user, 'accessLevel', {value: 'admin'})) {
    console.log('Property Created');
} else {
    console.log('There was a problem')
}
console.log(user.accessLevel);

Reflect.deleteProperty(user, 'name');