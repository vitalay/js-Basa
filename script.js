function first (name, firstName){
 console.log(`Hello ${name} ${firstName}`);
}
first("Ефимов", "Виталий")

function constDipositSum( depositUSD, maunt, rate){
  return depositUSD * (1 + rate / 12) ** maunt;
}
console.log(constDipositSum(1000, 24, 0.12));
console.log(constDipositSum(5000000, 12, 0.10));


function flirt (num){
  return num * num
}
console.log(flirt(5));
const flirt2 = (num) => num * num;
console.log(flirt2(6));


function toPover (num, power){
  const res = num ** power
  return res
}
console.log(toPover(2, 3));

const toPover2 = (num, power) => num ** power
console.log(toPover2(2, 4));

function toPover3(num = 10, power = 4) {
  const res = num ** power
  return res
}
console.log(toPover3());

const  reg = (age) => age < 18 ? "нет" : "да"
console.log(reg(19));

function vfcz (age) {
  if(age < 18){
  return 'нет'
  }
  return "да"
}
console.log(vfcz(19)); 