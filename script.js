/*
Ваша часовая ставка
80$
и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме
дней в неделю (кроме выходных).
вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё
*/

const bidSum = 80;
const clock = 5;
const wordClock = 40;
const dey = 11

const sum = (wordClock / clock) * 80
console.log(`${sum}$`)
const world = (wordClock / clock) < 11;
console.log(`Возьмусь за роботу ${world}`)

/*
Васи положил 12 000$ на вклад
7% годовых с
капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13
500$
через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const contribution = 12000;
const interestYears = 7;
const Years = 24

const sum1 = (contribution / 100) * interestYears * Years;
const sum2 = sum1 - contribution
if (sum1 > 13500) {
  console.log(`может купить дом остаток: ${sum2}$`)

} else {
  console.log(`не может купить дом`);
}


const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;
const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
  console.log(` Мы накопили: ${res}.Можем купить Остаток ${res - houseCost}$`);
} else {
  console.log(`Мы накопили: ${res} .Купить не сможем (((`)
};


const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 200000;
const message = budget > bmwX3Price && budget < fordFocusPrice ? 'BMW X3' : 'Ford Focus';
console.log(`Я хочу купить ${ message } `);


const admin = true;
const user = true;
console.log(`Правельно ${admin}`);
console.log(`Правельно ${admin && user}`);
console.log(`Правельно ${admin || user}`);
console.log(`Правельно ${!admin}`);
const user2 = false
console.log(`вивод ответа  правда или лож ${admin && user && (!user2 || user)}`);
const a = 7
if (a === -8 || a === 7) {
  console.log('Верно')
} else {
  console.log('Неверно')
}