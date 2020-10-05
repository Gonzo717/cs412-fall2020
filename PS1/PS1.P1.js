//PS1 Problem 1
//Function that takes a string as input. Returns a string with all the letters in the original string
//in reverse alphabetical order

const reverseAlpha = string => string.split('').sort().reverse().join('');

//print output with test string
console.log(`${reverseAlpha("supercalifragilisticexpialidocious")}`);

module.exports = {reverseAlpha}