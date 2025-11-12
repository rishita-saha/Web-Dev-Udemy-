let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;

    },
};
// console.log(car.start());

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John", 20);
// console.log(john.name);

function Animal(type){
this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.titli = function(){
    return `Custom method ${this}`;
}

let myArray = [1,2,3];
console.log(myArray.titli());