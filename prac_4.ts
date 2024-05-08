const obj = {
  name:"Yuji",
  age: 555
}

const obj2 = {
  ...obj,
  home: "hakodate"
}

console.log(obj)
console.log(obj2)


type Animal = {
  name:string,
  species:string
}

const human:Animal = {
  name: "haruki",
  species: "human"
}
console.log(human)


type Student = {
  name:string;
  age:number;
  major?:string;
}

const univ_1:Student = {
  name:"meiji",
  age:220,
  major:"computer science"
}

const univ_2:Student = {
  name:"mirai",
  age:13
}

console.log(univ_1.major)
console.log(univ_2.major)
