// function

// function greeting(){
//     console.log("Hello Lakshay");
//     return 10;
// }
// function add(num1, num2){
//     console.log(num1 + num2);
// }
// greeting();
// add(20, 20);
// add(6, 7);

// console.log(greeting);//It is going to store referfor a greeting function so that in future we can call it

// console.log(greeting());

// rest operator - It is going to make a array we can set it many numbers
// function addNumber(...num){
//     let sum = 0;
//     for(let n of num)sum+=n;
//     console.log(sum);
// }
// addNumber(6, 7);
// addNumber(6, 7, 8, 9);
// addNumber(6, 7, 8, 9, 10);
// addNumber(6, 7, 8, 9, 10, 11, 12);

// const arr = [10, 20, 30, 40, 50];
// const [first, second, ...num] = arr;
// console.log(first, second, num);

// Second method to make a function
// function : expression
// const add = function (num1, num2){
//     return num1 + num2;
// }
// console.log(add(10, 20));

// Arrow Function
// const addNumber = (num1, num2) =>{
//     return num1, num2;
// }
// console.log(addNumber(10, 20));

// let arr = [10, 55, 20, 45, 20, 101, 32, 30, 40]
// arr.sort((a, b) => a - b);
// console.log(arr);

// const squareNumber = num => num * num;
// console.log(squareNumber(20));

// In arraow function if we have singl parameter then we don't neet to write in ()
// const greeting = () =>{
//     let user = {
//         name: "Lakshay",
//         age: 19
//     }
//     return user;
// }
// console.log(greeting());

// const greeting = () => ({name: "Lakshay", age: 19});
// console.log(greeting());


// //IIFE(Immidiatly Invoke Function)
// (function greeting(){
//     console.log("Lakshay");
// })();//With this we are calling function 
// //This is going to use private variable

// (() => {
//     console.log("Hi");
// })();


// //Function Call Back- In javascript when we pass a function as an argument in an another function
// function greet(){
//     console.log("hello");
// }
// function dance(){
//     console.log("Dancing");
// }
// function meet(callback){
//     console.log("going to meet someone");
//     // dance()//Hardcode
//     callback();
//     console.log("Hi have finished meeting");
// }
// meet(greet);
// meet(dance);
// function zomatoOrderPlaced(){
//     console.log("We have started preparing meal");
// }
// function payment(amount, callback){
//     console.log(`${amount} payment is initialized`);
//     console.log("payment is recieved");
//     callback();
//     //GST:Government
//     //Rider ko kitna payment
//     //Company ka kitna profit
// }
// payment(500, zomatoOrderPlaced);

// //After Blinkit Merge we can use payment function we don't need to make another code
// function blinkitOrderPlace(){
//     console.log("You order is on the way");
// }
// payment(500, blinkitOrderPlace)