let balance = 1240;
balance = 1340;
//? changing the value of variables are allowed when it is declared with let

//! from now on var will not be used

//? Array 
const numbers = [1, 2, 3, 4, 5, 6, 71];
//this array is declared with const , so it cannot be re-assigned.

/* numbers = [2, 4, 22, 543, 3];//not allowed */

//? But array declared with const ,we can push and pull inside it . Same goes for objects too.
numbers.push(444);
// or
number[3] = 111;

//? Object 
const student = {
    roll: 2,
    name: 'Jubair',
    job: 'intern'
}
student.name = 'Abde manaf'; //allowed
student = { name: 'Qainuka' } //not allowed