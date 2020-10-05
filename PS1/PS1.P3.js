//PS1 Problem 3
//takes a string and a function as inputs, passes the function into the string
const doFunction = (string, fun) =>  fun(string);


console.log( doFunction('supercalifragilisticexpialidocious', (input) => input.split(/(?=c)/)));

console.table(
    doFunction('supercalifragilisticexpialidocious', (input) => {
            let table = {
                originalString: input,
                modifiedString: input.replace(/a/g,"A"),
                numberReplaced: input.replace(/a/g,"A").split("A").length-1,
                length: input.length
            };
            return table;
        }
    )
);

module.exports = {doFunction}