/*Variables - variables are like containers which can hold data 
-in javascript we can declare variables in three ways
- var, let and const
- var declared variables has global scope
- where as let and const are block scoped  */
var a = 12;
let b = 13;
const c = 'sun rises in east';
console.log(a,b,c);

/* these declarations has seperate features or functionalities assigned to them
-var declared variables can be re-declared and updated
-let keyword declared variables can only be updated but doesn't allow re-declaration
-const variables can't be re-declared or updated */

a = undefined; // this is possible as they can updated 
var a = "string" // this is also possible , but this created ambiguity while writing code. to fix this after ES6, it is suggested to use 'let'.
b = 'noooo' // as let declared can be updated this doesn't throw error
let b = 'not this time' // this throws error as re-declaration is not allowed
c = 21; // const variables can not be updated

/* Objects - Objects in javascript are key value pairs  */
const student = {
    name: "tom", // can also be declared as "name" : "tom"
    phone:1234,
    ispassed:true
}

/*a Object in javascript can't be updated to any other datatype unlike variable, but the key values can be changed */
student = 12; // will give error as it is not possible to change datatype of an object
student = {};// will give error as it is not possible to change datatype of an object

student['school'] = 'cartoon network'; // adds key- school , value - 'cartoon network' into the object
console.log(student['name']);
console.log(student.phone); // ways to access the elements

//Operators
/*ternary operator - '?' 
- this operator is a conditional operator*/
let out = 12>13 ? 'true' : 'false';
console.log(out);
console.log((1<2)? "yes" : "no"); // checks the condition and prints first thing if the conditon is true and vice-versa
// condition ? exp1 : exp2;

/* switch - this operator takes an expression and validates through different cases and executes different statement in those cases
-when a case expression is matched it will execute all the things in that switch untill it finds break statement 
-it even executes default block if break statement is not found even after matching a case scenario */
let exp = 'red';
switch (exp){
    case 'red':
      console.log("red")
      break;
    case 'blue':
      console.log("blue")
      break;
    case 'yellow':
      console.log("yellow")
      break;
    default:
      console.log("color not there")
  }

/* Loops - these are used when we want to repeat certain task
-different loops in javascript
-for loop - loops through block of code n times
-for in loop - loops through keys of an object or an array
-for of loop - loops through iterables
-while loop - loops through block of code based on a specific condition
-do while loop - while loop variant which runs atleast once */

//for loop
for (let i = 0 ; i<n ; i++){
    console.log(i);
}
//value of i can't be printed outside as its declared with let keyword, as it is block scoped declaration

const obj = {
    'one':1,
    'two':2,
    'three':3
}
//for in loop
for (let i in obj){
    console.log(i);
}
//for of loop
for (let i of 'something'){
    console.log(i);
}// we can only loop in iterables while using 'for of', we can't loop in a object using this loop

//while loop
let i = 0;//decalaration/ intialization
while(i<n){ //checks condition 
    console.log(i);
    i++;
}
//do while loop

let j = 0;
do{
    console.log(j);
    j++;
}while(j<n)
// here the block of code will be executed atleast once

/* Function - a block of code which is designed to perform certain task  */

// old way to create a function
function oldway(arg1, arg2){
    let avg = (arg1+arg2)/2;
    console.log(avg);
}
oldway(1,2) // function call

// now we use arrow functions to create a function in javascript
const avg = (arg1,arg2) => {
    let val = (arg1+arg2);
    console.log(val);
}
//function without any arguments 
const hello = () => {
    console.log("Hi, How are you?");
    return 'good';
}

let v = hello(); // any value returned from function will be assigned to function call
console.log(v);

// if we want loop through an object using for loop
const marks = {
    one:23,
    two:45,
    three:34
  }
  // console.log(Object.keys(marks)[0])
  for (let i= 0; i<Object.keys(marks).length; i++){
    console.log("the marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
  }

// practice questions on arrays
let num = ['10',20,25,30,35,40,45,50]
const funcdiv = (val) => {
  return val%10 === 0;
} 
let r = num.filter(funcdiv)
console.log(r)
let n1 = n.map((val) => {
  return val*val
})
console.log(n1)
let n = [1,2,3,4,5];
let n2 = n.reduce((total,currval) =>{
  return total*currval
})
console.log(n1)

//Java script guess the number
const x = Math.floor(Math.random()*100+1);
let guess = 0;
do{
// console.log(x)
let num = Number.parseInt(prompt("Guess the number"));
if (num === x){
  console.log("you have guessed it")
  break;
}
else if (num>x){
  console.log("guessed number is greater! try lower")
}
else { 
  console.log("guessed number is lesser! try higher")
  
}
  guess++
}while(true);
let score = 100-guess;
console.log(`your score is ${score}`)






























