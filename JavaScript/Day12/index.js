//forEach Filter Map Reducer Set

// const arr = [10, 20, 30, 40];
// let sum = 0;
//forEach Loop
// arr.forEach((number) => {
//     sum += number;
// });
// console.log(sum);

//Filter
// const arr = [10, 20, 30, 40];
//true: select false: not select
// const newArr = arr.filter((number) => number > 25);
// console.log(newArr);

//Making Own filtering method

const compare = ((number) => number > 25);
// arr.filtering = function(compare){
//     const ans = [];
//     for(let num of this){
//         if(compare(num))ans.push(num);
//     }
//     return ans;
// }

// console.log(arr.filtering((num) => num > 25));
                           //. ↓  
                        //This is call back function
//For genrealizing arr
Array.prototype.filtering = function(compare){
    const ans = [];
    for(let num of this){
        if(compare(num))ans.push(num);
    }
    return ans;
}

const arr = [10, 40, 20, 50, 100, 102, 108, 12];
// console.log(arr.filtering((number) => number>100));

console.log(arr.map((num) => num * 2));

