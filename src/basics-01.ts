// object, array, tuple, enum, any


// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Phillip",
//     age: 40,
//     hobbies: ["coding", "music"],
//     role: [3, "developer"],
// }

// person.role.push('baba')  // ! .push is allowed on tuples, beware
// console.log(person.role);

// enum Role { ADMIN = 0, READ_ONLY = 1, AUTHOR = 2 };
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Phillip",
    age: 40,
    hobbies: ["coding", "music", "tramping", "sleeping"],
    role: Role.ADMIN,
}

// any type is possible, but best avoided
let avoidThisKindOfVariable: any;
avoidThisKindOfVariable = "hello";
avoidThisKindOfVariable = true;
avoidThisKindOfVariable = 1;

let favoriteActivities: string[];
favoriteActivities = ["coding"];

console.log(person);
 
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}