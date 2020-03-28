// Animal constructor
const Animal = function(name, food){
    this.name = name;
    this.food = food;
}
Animal.prototype.eat = function(){
    console.log(`${this.name} is eating ${this.food}`);
}

// Create a Cat Constructor, which will inherit from Animal:
// <<<<< your code start here
const Cat = function(...args){ 
    Animal.apply(this, args);
}

Cat.prototype = Object.create(Animal.prototype);

// >>>>> your code ends here

// create tom object:
const tom = new Cat('Tom', 'cheese');

// use tom:
tom.eat();