"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combinedValues;
combinedValues = add;
// console.log(combinedValues(10, 65));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=funtions.js.map