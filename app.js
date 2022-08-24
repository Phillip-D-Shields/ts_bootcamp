function add(n1, n2, showResult, phrase) {
    if (showResult)
        console.log("".concat(phrase, " ").concat(n1 + n2));
    else
        return n1 + n2;
}
var number1 = 5;
var number2 = 4.5;
var printResult = true;
var resultPhrase = 'result is: ';
// const result = add(number1, number2, printResult);
// console.log(result);
// console.log(typeof result);
add(number1, number2, printResult, resultPhrase);
