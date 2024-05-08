// const person: {
//   name:string;
//   age:number;
//   hobbies:string[];
//   role:[number, string];
// } = {
//   name: 'yuta',
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role:[2, "author"]
// }

enum Role {
  ADMIN, READ_ONRY, AUTHOR
}

const person = {
  name: 'yuta',
  age: 30,
  hobbies: ["sports", "cooking"],
  role:Role.ADMIN
}

console.log(person);
