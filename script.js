function add(a, b){
  return a + b;
}
function sem(a, b) {
  return a - b;
}
function red(a, b) {
  return a ** b;
}

function div(a, b, fn) {
  const res = fn(a, b);
  return res

}

console.log(div(10, 2, add,)); // 15
console.log(div(10, 2, sem)); // 8
console.log(div(10, 2, red)); // 100

// function power(pow) {
//   return function (num) {
//     return num ** pow;
//   }
// }
//     const powerOfTwo = power(2);
//     console.log(powerOfTwo(5));
//     console.log(powerOfTwo(10));
//     const powerOfThree = power(3);
//     console.log(powerOfThree(5));
//     console.log(power(5)(4))


const  power = (pow) => (num) => num ** pow;
  
    const powerOfTwo = power(2);
    console.log(powerOfTwo(5));
    console.log(powerOfTwo(10));
    const powerOfThree = power(3);
    console.log(powerOfThree(5));
    console.log(power(5)(4))