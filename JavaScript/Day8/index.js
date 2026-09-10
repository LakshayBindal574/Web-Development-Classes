// // Objects
// // Key Value
// const user = {
//     name: 'Lakshay Bindal',
//     age: 20,
//     emailID: 'lakshaybindal83@gmail.com',
//     amount : 10000000,
//     "home add": 'PALWAL',
// }
// console.log(typeof user);

// //CRUD operation: Create Read Update Delete

// // console.log(user.name);

// // Create
// user.addhar = 1234;
// console.log(user);

// //Read
// console.log(user.name);

// // Update
// user.amount = 10000000000;
// console.log(user);

// // Delete
// delete user.addhar;
// console.log(user);

// console.log(user['name']);

// console.log(user['home add']);
// const user = {
//     name: 'Lakshay Bindal',
//     age: 20,
//     emailID: 'lakshaybindal83@gmail.com',
//     amount : 10000000,
//     "home add": 'PALWAL',
// }
//Object Copy by Referance
// const user2 = user;
// console.log(user2);

//To get Keys

// console.log(Object.keys(user));//This is going to create an array and store all the keys in that array
// console.log(Object.values(user));//This is going to create an array and store all the values of each key in that array
// console.log(Object.entries(user));//This is going to create an array and store all the keys and values in the 2D array format

// for(let keys in user){
//     console.log(keys, user[keys]);
// }
//user[keys] => user.name
//user[keys] => user.age
//user[keys] => user.emailID
//user[keys] => user.amount
//user[keys] => user.'home add'

//const name = user.name
//const age = user.age
//This format is not that much scalable and may have some problem we can use destructured method

// const {name:username, age:userage, amount} = user;//This is called Object Destructuring
// console.log(username, userage, amount);

// Array Destructuring

// const arr = [10, 20, 30, 40, 50];
// const [first, second] = arr;
// console.log(first, second);

//Recommand method for loop for objects
// for(let key of Object.keys(user)){
//     console.log(key, ":", user[key]);
// }
// const user = {
//     name: 'Lakshay Bindal',
//     age: 20,
//     emailID: 'lakshaybindal83@gmail.com',
//     amount : 10000000,
//     "home add": 'PALWAL',
// }

//Iterate usesing array
// const temparr = Object.keys(user);
// for(let key of temparr){
//     console.log(key, ":", user[key]);
// }

// for(let [key, value] of Object.entries(user)){
//     console.log(key, ":", value);
// }

// const user = {
//     name: 'Lakshay Bindal',
//     age: 20,
//     emailID: 'lakshaybindal83@gmail.com',
//     amount: 10000000,

//     greeting: function() {
//         console.log(`Hello ${user.name}`);//'this' keyword is going to refer the object user
//         return 20;
//     }
// };

// // Print the complete object
// console.log(user);

// // Call the greeting function
// const x = user.greeting();
// console.log(x);

// //why to avoid user.name and use this.name

// const user2 = {
//     name: "Mohan",
//     amount: 1000000,
// }
// user2.greeting = user.greeting;
// console.log(user2.greeting());//If we don't use this key it is going to give "Hello Lakshay Bindal";

//Nested Object

// const user = {
//     name: 'Lakshay Bindal',
//     age: 20,
//     emailID: 'lakshaybindal83@gmail.com',
//     amount: 10000000,
//     address: {
//         city: "Palwal",
//         state: "Haryana"
//     }
// }
// console.log(user.address.city);

//How to make independent copy of user
//This is shallow copy
// const user2 = {...user};
// delete user2.emailID;
// console.log(user, user2);

// //But for addres It can be change because it is for one level
// user2.address.city = "Faridabad";
// console.log(user, user2);

//Deepcopy
// const user2 = {...user};
// delete user2.emailID;
// console.log(user, user2);

//Keys values can be String or Symbol
// const sym = Symbol("id");

// const user = {
//     name: 'Lakshay Bindal',
//     age: 20,
//     emailID: 'lakshaybindal83@gmail.com',
//     amount: 10000000,
//     [sym]: 12345
// }
// console.log(user[sym]);

