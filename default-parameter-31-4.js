function addThese(num1, num2 = 0) {
    sum = num1 + num2;
    return sum;
}
const result = addThese(4, 1)//5
console.log(result);
//? If a parameter's value is not passed, then the default value mention on the function will be used. This is called the default parameter.
const result2 = addThese(4)
console.log(result2);//4