const user = {
    name: 'Ahsan',
    password: 'password123'
};

const userHandler = {
    get:(target, name) => {
       return (name === 'password')? '*'.repeat(target.password.length) : target[name]
    },
    
    set:(object, property, value) => {

        if (property === 'password' && value.length < 8) {
            throw new RangeError('Password must be atleast 8 characters.');
        }

        object[property] = value;
        return true;
    }
};

const proxiedUser = new Proxy(user, userHandler);

console.log(proxiedUser.password);
proxiedUser.password = '124';