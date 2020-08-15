function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combinedValues;
combinedValues = add;
// console.log(combinedValues(10, 65));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
