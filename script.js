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