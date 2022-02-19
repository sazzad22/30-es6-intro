// spread operator
//using three dots before the array variable  name ,we can get each elements of the array .
const myArray = [3, 2, 1, 0];
console.log(myArray);//(4) [3, 2, 1, 0]
console.log(...myArray);//3 2 1 0

const max = Math.max(3, 2, 1, 0);
const maxInMyArray = Math.max(...myArray);
console.log(maxInMyArray);//3

//If an array is already declared. one wants to push new elements to it , but don't want to change the original array . to do that one must put that array in a new variable. But Just that won't be enough. spread operator should also be with the array .
const myArray2 = [...myArray];

myArray.push(-1);

console.log(myArray);//[3, 2, 1, 0, -1]
console.log(myArray2);//[3, 2, 1, 0]