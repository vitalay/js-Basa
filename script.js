
'use strict';

const b = 1

const a = {
  b,
  getB: function () {
    return this.b
  },
  getBAlt() {
    return this.b
  }
}
console.log(a.getB());
console.log(a.getBAlt());


// ____________________________________________________________________
const audi = {
  make: 'Audi',
  model: 'АЗ',
  year: 2021,
  damages: [],
  addDamage(part, rate) {
    console.log(`у Авто: ${this.make} ${this.model} ${this.year}  добавлено: - повреждение ${part} со степенью ${rate}`);
    this.damages.push({
      part,
      rate
    })
  },

}
audi.addDamage('капот', 3)

const bmw = {
  make: 'BMW',
  model: ' X5',
  year: 2022,
  damages: [],
}
bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2)

const addDamageFunc = audi.addDamage;
// addDamageFunc ('Бампер', 2);
addDamageFunc.call(bmw, 'Бампер', 2);
addDamageFunc.call(audi, 'Бампер', 2);
addDamageFunc.apply(bmw, ['Бампер', 2]);
addDamageFunc.apply(audi, ['Бампер', 2])



const car = {
  marka: 'kalina',
  madele: 'x5',
  damadge: []
}
const addCarManipulation = {
 addCar(rag, par){
    car.damadge.push({
      rag,
      par
      })
    console.log(`Повреждения ${this.marka} ${this.madele}`);
}
}
const aaaddd = addCarManipulation.addCar.bind(car)
aaaddd('Крыло', 3)
const aaaddd2 = addCarManipulation.addCar.bind(car, 'Kрыша')
aaaddd2(5)
aaaddd2(3)
console.log(car);

// */
//   Создайте объект пользователя с паролем.
// С помощью функции ниже удалить пароль сделав
// функцию сброса пароля
//   */
function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}
const user = {
  login: 'a@a.ru',
  password: '12345'
} ;
  const resetUserPassword = removePassword.bind(user, true);
  resetUserPassword() ;
console.log(user)