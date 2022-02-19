// Before es6 string did not read line breaks in the qouts;
// in es6 using ` back tick line breakes are read also inside back tick we can use othe variables and valid javascript expression inside a string . making the string dynamic

const names = 'abdur rajjaq \n'+
    'bin yousus'   //previously used methods for line breaks
console.log(names);

//es6 back tick
const myString = `The names
the ages
the details` //the line breaks are read
console.log(myString);

// using js expression and variables inside a string

const friend = ['no', 'bole', 'intop'];
const count = 5;
const testString = 'I had ' + friend.length + ' friends' + 'Now I have ' + count;
//this is the olld ways
console.log(testString);

//using es6 - the expression and variables are used inside ${ }
const testString2 = `in ES6 we have ${friend.length}people in the team . Before there were ${count * 2} people`;

console.log(testString2);