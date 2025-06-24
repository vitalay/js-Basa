/*
Имеется массив изменения цен prices, где внутри 1й элемент массива является ценой в момент X,
2й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150] [100, 150]
*/
// const prices = [[100, 200], [120, 100], [200, 350]];
// const result = prices
// .map(product => product[1] - product[0])
// .filter(price => price > 0)
//   console.log(result);


// const prices = [[100, 200], [120, 100], [200, 350]];
// const result = [];

// for (let i = 0; i < prices.length; i++) {
//   const profit = prices[i][1] - prices[i][0];
//   if (profit > 0) {
//     result.push(profit);
//   }
// }

// console.log(result);

// const prices = [[100, 200], [120, 100], [200, 350]];
// const result = [];

// for (const [buy, sell] of prices) {
//   const profit = sell - buy;
//   if (profit > 0) {
//     result.push(profit);
//   }
// }

// console.log(result);



// const operacions = [100, -20, 7, -30, 40]
// let balans = 0

// for (const operacion of operacions) {
//     balans += operacion
// }
// console.log(balans)

const operations = [100, -20, 7, -30, 40]
const finalBalance = operations.reduce((acc, operation, i) => {
console.log(`Итерация ${i}, асс: ${acc}, operation ${operation}`)
return  acc += operation;
},0)
console.log(finalBalance);

const minElement = operations.reduce((acc, operation)  => {
  if (operation > acc) {
    return acc;
  } else {
    return operation
  }
 } ,  0)

console.log(minElement);

/*
Найти среднее значение последовательность
числе с помощью reduce
*/
const arr = [2, 4, 7, 10];
const avg = arr.reduce((acc, el, i) => {
if (i != arr.length - 1) {
return acc + el;
} else {
return (acc + el) / arr.length
}
}, 0)

console.log(avg)

const avgq = arr.reduce((acc, el) => acc + el, 0) / arr.length;
console.log(avgq); // 5


const  as = arr.find(el => el > 5) 
const asa = arr.findIndex(el => el > 5)
console.log(as);
console.log(asa);

/*
Написать функцию, которые возващает true,
если элемент есть, и false, если нет.
*/
const arrr = [12, 4, 4, 10, 20]
function some(array, element) {
  const res = array.find(el => el === element);
  return res == undefined ? false : true;
}
console.log(some(arrr, 0))

console.log(arrr.some(el => el === 0))


const prices = [[2, 4],[3, 4],[10,[20, 50]]]
const res1 = prices.flat(2);
const res2 = prices.flatMap(el => el.concat([1]));
console.log(res1);
console.log(res2);


const users = ['Вася' ,'Маша', ' Катя', 'Аня'];
console.log(users) ;
users.sort();
console.log(users);

const operationss = [100, -300, -100, 50, 480]
  console.log (operationss);
// ‹ 0 - а, b - сохраняем порядок
// > 0 - b, а - меняем порядок
operationss.sort((a, b) => a - b)
//   if (a > b) {
//   return 1;
//   }
//   if (a < b){
//     return -1;
// }
// })
console.log(operationss);
operationss.sort((a, b) => {
  if (a < b) {
    return 1;
  }
    if (a > b) {
  return -1;
}
})
console.log(operationss)

const arrrr = [1, 2, 3, 4, 5]
console.log(new Array(1, 2, 3, 4, 5));
const arrrr2 = new Array(5);
console.log(arrrr2);
arrrr2.fill(1, 0, 3);
arrrr2.fill(2, 3, 5);
console.log(arrrr2);
const arrrr3 = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(arrrr3)