// //Array
// let marks = [10, 20, 30, 40];
// console.log(marks.length);

// let info = ['Lakshay', 18];
// console.log(info);
// console.log(info[0]);
// info[1] = 19;
// console.log(typeof info);
// info.push("Software Developer");
// info.push(7.0);

//pop operation: Delete element from end
// info.pop();
// console.log(info);

//Adding element at start
// info.unshift(420);
// console.log(info);

// //delete element from start
// info.shift();
// console.log(info);

//Iteration on array
// let arr = [10, 20, 50, 90, 11];
// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }
// for(let num of arr){
//     console.log(num);
// }

// let arr2 = arr;
// arr2.push(30);
// console.log(arr);
// const arr = [10, 20, 50, 90, 11];
// arr[0] = 100;
// // console.log(arr);
// const arr = [10, 20, 50, 90, 11];
// const arr2 = arr.slice(1, 4);
// console.log(arr, arr2);
// console.log(arr.splice(1, 4));
// console.log(arr);

// const arr = [10, 20, 50, 90, 11];
// const arr1 = [10, 20, 50, 90, 11];
// console.log(arr.concat(arr1));
// const arr2 = [arr, arr1];
// console.log(arr2);

// //spread operator
// const arr3 = [...arr, ...arr1];
// console.log(arr3);

// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(arr.join("200, 2000"));

// console.log(arr.indexOf(20));
// console.log(arr.lastIndexOf(20));

// console.log(arr.sort());
// console.log(arr.reverse());

// arr.sort((a,b)=>a-b);
// console.log(arr);

const arr = [101, 20, [[50, 100, 30, 12], 90, 11], 40, 20];
console.log(arr.flat());
console.log(arr.flat(Infinity));
console.log(arr["0"]);

