/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum=0;
let i = 1;
let n = 5;
 while(i<=n){
    sum+=i;
    i++
 }
//  console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

//let n=5;
let arr = [];
while(n>0){
    arr.push(n);
    n--;
}
// console.log(arr);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

/*const prompt = require("prompt-sync")();
let teaCollection = [];
let tea ;
do{
   tea = prompt(`Enter your favorite tea(type "stop" to finish):`)
    if(tea != "stop")
      teaCollection.push(tea);
}while(tea != "stop")
console.log(teaCollection);*/

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let s = 0;
let a = 1;
do{
   s += a;
   a++;
}while(a<=3)
// console.log(s)

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let array = [2,4,6];
let multipliesNumbers = []
// for (let index in array){
//    multipliesNumbers.push(array[index]*2);
// }
for (let b=0;b<array.length;b++) {
  multipliesNumbers.push(array[b] * 2);
}
// console.log(multipliesNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cityy = ["Paris","New York","Tokyo","London"]
let cityListt = []
for (let index in cityy) {
  cityListt.push(cityy[index]);
}
console.log(cityListt);