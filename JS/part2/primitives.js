//Number
let balance = 120;
let b=new Number(120);

// console.log(balance);
// console.log(typeof balance);
// console.log(b.valueOf());
// console.log(typeof b);

//boolean
let isActive = true
let isReallyActive = new Boolean(true); 

//null & undefined

let firstName;
//console.log(firstName);
let lastName = null;
//console.log(lastName);

//string

let myString ="hello"
let myStr= 'Hiii'
let user = 'Titli'

let oldGreet = myString +' '+ "titli"
// console.log(oldGreet);

let greetMessage = `Hello ${user} !`
let demoOne =`Value is ${2*2}`;
// console.log(greetMessage);
// console.log(demoOne);

//symbol
let sm1 = Symbol("titli")
let sm2 = Symbol("titli")
console.log(sm1==sm2);