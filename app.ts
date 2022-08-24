// union, literal

// reusable type alias
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";


// combine(n1: union type, n2: union type, resultType: literal type)
function combine(n1: Combinable, n2: Combinable, resultType: ConversionDescriptor) {
  let result: Combinable;

  if (typeof n1 === "number" && typeof n2 === "number" || resultType === "as-number") result = +n1 + +n2;
  else result = n1.toString() + n2.toString();

  //   if (resultType === "as-number") return +result;
  //   else return result.toString();

  return result;
}

const combine1 = combine(20, 35, "as-number");
console.log(combine1);

const combine2 = combine("20", "35", "as-string");
console.log(combine2);

const combine3 = combine("20", "35", "as-number");
console.log(combine3);


// type alias for objects
type User = { name: string; age: number };
const u1: User = { name: 'Phillip', age: 40 }; // this works!

function greet(user: User) {
  return `Hi, I am ${user.name}`;
}

console.log(greet(u1));

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

console.log(isOlder(u1, 30));
