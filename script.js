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

const KG_IN_USD = 7
const KM_IN_USD = 5

function calkulateW(present){
  return present * KG_IN_USD
}
function calkulateKm(distance) {
  return distance * KM_IN_USD
}
function getExchengPrais(present1, present2, distance){
  const price1 = calkulateW(present1)
  const price2 = calkulateW(present2)
  const distantsPraci = calkulateKm(distance)
  return price1 + price2 + distantsPraci
}
console.log(getExchengPrais(1, 5, 20 ));



/*
- Возраст
  - Наличие работы
    - Деньги
Нужно проверить может ли он купить новый МасВоо за 2000$ ?
  Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24 - х лет и он имеет работу, 100$ если ему просто больше 24 - х лет и 0 в ином случае.
Напишите функцию, которая принимает данные пользователя и товара и возвращает true unu false;
*/
function computeCredit(age, hasJob = false){
switch (true) {

  case age > 24 && hasJob:
    return 500;
  case age > 24:
    return 100;
  default:
    return 0;
}
}
function canBuy(productPrice, age, money, hasJob = false) {
const creditMoney = computeCredit(age, hasJob);
return productPrice <= money + creditMoney;
}
console.log(canBuy(2000, 25, 1500,  true));