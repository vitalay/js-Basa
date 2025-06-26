const users = {
  name: 'Ivan',
  sername: 'Efimov',
  age: 24,

 fullName: function () {
     return this.name + ' ' + this.sername + ' Возраст: ' + this.age
  }
}
 
console.log(users.fullName());

/* Релизовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не хватает баланс
Так же реализовать метод вывода числа операций по кошельку
*/


const wallet = {
  balance: 0,
  operations: [],

  increase: function (sum, reason){
this.balance += sum;
  this.operations.push({
    reason: reason,
    sum: sum
  })
     return true;
},
    decrease: function (sum, reason){
if (this.balance < sum) {
    console.log ('Недостаточно баланса') 
return false; 
}
this.balance -= sum;
      this.operations.push({
        reason: reason,
        sum: -sum
      })
return true;
    },
  get0perationLenght: function () {
  return this.operations.length;
}
}


console.log(wallet.increase(1000, 'Зарплата'));
console.log(wallet.get0perationLenght());
console.log(wallet.decrease(2000, 'Покупка ноутбука'));
console.log(wallet.get0perationLenght());
console.log(wallet.decrease(500, 'Покупка телефон'));
console.log(wallet.get0perationLenght());
console.log(wallet.balance);
console.log(wallet.operations);


const cities = {
  msk: {
    let: 200,
    temp: 25
  },
  spb: {
    It: 100,
    temp: 20
  }
}
let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
// for (const key in cities) {
// sumTemp += cities[key].temp;
//}
// console.log(sumTemp / citiesCount);
for (const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);


let user = {
  name: 'Вася',
  age: 40,
  city: 'Moscow'
}
const { age, ...userWithouAge } = user;
console.log(age);
console.log(userWithouAge);

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  creditCard: '2342-2345-2734-2356'
};
  user = {
...user,
...additionalData
  }
console.log(user);

const cities1 = {
  msk: {
    temp: {
      celcius: 25
    }
  },
spb: {
  }
}
const city = 'msk'
if (cities1[city] != undefined && cities1[city].temp != undefined)
  console.log(cities1[city].temp.celcius);
console.log(cities1[city]?.temp?.celcius);