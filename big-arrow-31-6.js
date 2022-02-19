//function declaration
function add(num1, num2) {
    return num1 + num2;
}
//funtion expression 
const add2 = function add(num1, num2) {
    return num1 + num2;
}
//function expression (anonymouns)
const add3 = function(num1, num2) {
    return num1 + num2;
} //just variable diye e fucntion ta call kora jabe. 

//arrow function
const add4 = (num1, num2) => num1 + num2;
//Return er part ta arrow er por third bracket charai lekha hobe. function one line er hole arrow er jonno ei format use kora jabe.

const sum1 = add(2, 3);
const sum2 = add2(2, 3);
const sum3 = add3(2, 1);
const sum4 = add4(4, 5);
console.log(sum1, sum2, sum3, sum4);
