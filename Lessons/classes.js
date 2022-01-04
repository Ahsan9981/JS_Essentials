class User {



    constructor(username, password, isLoggedIn = false) {
        this.username = username;
        this._password = password;
        this.isLoggedIn = isLoggedIn;
    }

    get password() { return '*'.repeat(this._password.length); }
    set password(pwd) { this._password = pwd; }

    login() {
        
        if (this.username === 'ahsan', this.password === 'password123') {
            this.isLoggedIn = true;
        }

    }

    show() {
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`LoggedIn : ${this.isLoggedIn}`);
    }

    static getLoginUrl() {
        return 'http://localhost:3000/login';
    }
}

class Developer extends User {


    constructor(username, password, languages, isLoggedIn = false) {
        super(username, password, isLoggedIn);
        this.languages = languages;
    }

    listLanguages() {
        console.log(this.languages.join('\n'));
    }

    show() {
        super.show();
        this.listLanguages()
    }

}

const user = new Developer('ahsan', 'password123', ['JavaScript', 'C#', 'Ruby']);
user.show();
console.log(User.getLoginUrl());

