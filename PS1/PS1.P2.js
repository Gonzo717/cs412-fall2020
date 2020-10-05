//PS1 Problem 2
//Function that takes a formatted string as input in the form of 'digit operator digit,' and evaluates and returns the value
//of the expression

const getOperator = input => {

    switch(input.charAt(1)){
        case '+':
            return (left, right) => left + right; //this is a function
        case '-':
            return (left, right) => left - right; //this is a function
        case '*':
            return (left, right) => left * right; //this is a function
        case '/':
            return (left, right) => left / right; //this is a function
        case '^':
            return (left, right) => left ** right; //this is a function
    }
}

//helper method to parse inputs
const parse = (input) => {
    return [input.charAt(0),input.charAt(2)];
}

const expression = '8*3';
let operator = getOperator(expression);
console.log(`${expression} = ${operator(parse(expression)[0],parse(expression)[1])}`)

module.exports = {parse, getOperator}