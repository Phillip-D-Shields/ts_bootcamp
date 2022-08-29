function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`result: ${num}`);
}

function printResult00(num: number): undefined {
  console.log(`result: ${num}`);
  return;
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log(`result is ${result}`);
});

printResult(add(5, 12));
// returns undefined because nothing is returned by function
console.log(printResult(add(5, 12)));

printResult00(add(1, 3));
console.log(printResult00(add(1, 3)));

console.log(add(55, 10));

// let combineValues: Function;  works but is vague
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; throws error

console.log(combineValues(2, 2));
