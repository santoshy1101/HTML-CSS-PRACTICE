



// 7.1: You have given array of strings. Your task is to obtain last two elements of given array using slice method?
// Input;
// let admins = ['john', 'paul', 'Neha', 'harry'];
// Ouput[('Neha', 'harry')];
// answer
// let obtain = admins.slice(-2);
// console.log(obtain)

// 7.2: You have given an array of 5 elements(1-5). Your task is defined as below. [From video lecture 7.2]

// You have to delete 2 elements starting from index 2.
// You have to add 3 new elements on that position of Your choice.
// Display the 2 deleted elements in console.

// let numbers = [1,2,3,4,5];
// console.log(numbers)
// let delEle = numbers.splice(2,2,6,7,8)
// console.log(delEle)
// console.log(numbers)


// You have given an array of numbers nums. You have to find sum of all array elements using reduce method?
// let nums = [2, 3, 5, 7, 8, 4, 9];

// const sum=nums.reduce((accoumelator,value)=>{
//     return accoumelator+=value
// },0)
// console.log(sum)


// 7.8: You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

// let nums = [2, 3, 5, 6, 8, 6, 4, 8];7.8: You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

// let nums = [2, 3, 5, 6, 8, 6, 4, 8];

// const val = nums.indexOf(8)
// console.log(val)


// 7.9: You have given an array of objects of users as below. Find the specified user with name property = "John". Also find the position (index+1) of that user inside the array?

// let users = [
//   {
//     name: 'Paul',
//     age: 24,
//     verified: true,
//   },
//   {
//     name: 'John',
//     age: 21,
//     verified: false,
//   },
//   {
//     name: 'Neha',
//     age: 19,
//     verify: true,
//   },
// ];