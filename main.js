var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.talk = function () {
        return "Bra, bra, bra...";
    };
    return Person;
})();

var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

var alex = new Person("Alex");
console.log(alex.talk());
var greeter = new Greeter(" GitHub.");
console.log(greeter.greet());
