function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var num1 = 10;
var num2 = 5;
var printResult = true;
var resultPhrase = 'Result is: ';
add(50, 5, true, resultPhrase);
