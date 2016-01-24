class Person{
    name:string;
    
    constructor(name:string){
        this.name = name;
    }
    talk(){
        return "Bra, bra, bra...";
    }
}


class Greeter{
    
    greeting:string;
    
    constructor(message:string){
        this.greeting = message;
    }
    
    greet(){
        return "Hello, " + this.greeting;
    }
}

var alex = new Person("Alex")
console.log(alex.talk());
var greeter = new Greeter(" GitHub.");
console.log(greeter.greet());