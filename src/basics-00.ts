// number, string, boolean

function add00(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) console.log(`${phrase} ${n1 + n2}`);
  else return n1 + n2;
}

let number0: number;
number0 = 100;
const number1 = 5;
const number2 = 4.5;
const showResult = true;
const resultPhrase = "result is: ";

// const result = add(number1, number2, printResult);

// console.log(result);
// console.log(typeof result);

add00(number1, number2, showResult, resultPhrase);