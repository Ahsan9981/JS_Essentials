const user = {
    username: 'Ahsan9981',
    password: 'Love3Brooke',
    loggedin: true
};

console.log(user);

const map = new Map();
map.set('username', 'Ahsan9981');
map.set('password', 'Love3Brooke');
map.set('loggedin', true);
map.set(new Date(), true);
map.set(user, true);

console.log(map);