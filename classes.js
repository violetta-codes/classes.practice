class User {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }

get name() {
    return this._name;
}
set name(value) {
    if(!value) {
        console.log('Name cant be empty!');
        return;
    }
    this._name = value;
    }
    sayHi() {
        console.log('My name is ' + this.name);
    }
    sayBye() {
        console.log('Bye!');
    }
    
}

const user1 = new User('Andrew', 30);

console.log(user1.name);