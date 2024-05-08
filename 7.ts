function combine(inp1: string | number, inp2:string|number){
  let result;
  if (typeof inp1 === "string" || typeof inp2 === "string"){
    result = inp1.toString() + inp2.toString();
  }else{
    result = inp1 + inp2;
  }
  return result;
}

console.log(combine(12, 6));
console.log(combine("Ann", 6));
