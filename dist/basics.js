"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
const num1 = 10;
const num2 = 5;
const printResult = true;
const resultPhrase = 'Result is: ';
add(50, 5, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map