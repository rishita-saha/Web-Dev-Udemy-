const person = {
    name: "Titli",greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};
person.greet();

const greetFun = person.greet
greetFun()

const bound = person.greet.bind({name:"Rishu"});    //bind() call and apply
bound();