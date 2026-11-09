function person(name){
    this.name = name;
}

person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let me = new person("Titli");
me.greet();