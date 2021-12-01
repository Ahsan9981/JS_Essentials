const user = 'Ahsan';
const isAdmin = true;
const pin = 1234;
const role = 'dev';

const person = {
    user,
    isAdmin,
    [role]: true,
    authentication (pin) {
        return this.pin == pin;
    }
}