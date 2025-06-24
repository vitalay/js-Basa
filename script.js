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
const arr = [2, 4, 4, 10];
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