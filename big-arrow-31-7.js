// Bunch of arrow functions
const add = (a, b) => a + b;
//in this one liner function the a + b is the return of this function. It is called implicit return.
const sum = add(2, 5);

console.log(sum);

const multiply = (a, b, c) => a * b * c;
const result = multiply(3, 2, 1);
console.log(result);

// one parameter
const fiveTimes = (a) => a * 5;
const result2 = fiveTimes(4);

console.log(result2);//20
//Above function can be written without the paranthesis around the one parameter. It is applicable only in case of one parameter.
const fourTimes = a => a * 4;

//no parameter
const getName = () => 'Abu Dharr';
const name = getName();

console.log(name);

const calculation = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 2;
    
    return output; // function er vetor multiple line thakle return lekhte hobe. This is called explicit return.
}

const total = calculation(3, 4);
console.log(total);