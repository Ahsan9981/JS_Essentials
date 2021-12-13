const greeting = (strings, username) => {

    console.log(strings);
    console.log(username);

    const now = new Date();
    const timePeriod = now.getHours() < 12 ? 'Morning' : now.getHours() >= 12 && now.getHours() <= 13 ? 'Noon' : now.getHours() > 13 && now.getHours() <= 20 ? 'Evening' : 'Night';
    // console.log(`Good ${timePeriod} ${username} ${strings[1]}`);
    return `Good ${timePeriod} ${username} ${strings[1]}`;
}

const user = 'Ahsan';

greeting`Hello ${user}, nice to meet you!`;