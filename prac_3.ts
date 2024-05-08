for (let num1:number = 1; num1 <= 100; num1++) {
if (num1 %15 == 0) {
  console.log("fizzbuzz");
} else if (num1 % 3 == 0){
  console.log("fizz");
}else if (num1 %5 == 0){
  console.log("buzz");
}else{
  console.log(`${num1}`)
}
}
