function first (name, firstName){
 console.log(`Hello ${name} ${firstName}`);
}
first("Ефимов", "Виталий")

function constDipositSum( depositUSD, maunt, rate){
  return depositUSD * (1 + rate / 12) ** maunt;
}
console.log(constDipositSum(1000, 24, 0.12));
console.log(constDipositSum(5000000, 12, 0.10));