
'use strict';

// const user = {
//   firstName: 'Vasy',
//   lastName: 'Vasilievich',
//   age: 15,
//   addUserInfo: function () {
//     console.log(`${this.firstName}  ${this.lastName}`);

//     const canDrink = () => {
//       if (this.age >= 18) {
//         console.log('Может Пить');
//       } else {
//         console.log('Не может пить ');
//       }

//     }
//     canDrink()
//   },

//   addUserInfoArro: () => {
//     console.log(`${this.firstName}  ${this.lastName}`);
//   }
// }

// user.addUserInfo()
// user.addUserInfoArro()


/*
дополнить объект методами для получения имени:
- компании
- ceo
- сотрудника
*/
const company = {
  name: '000 Arpo',
    // addName: function (){
    //   console.log(`Компания: ${this.name}`)
    // },
  employees: [
    {
      
      name: 'Света',
        getName: function () {
        return this.name
      }
    }
  ],

  ceo: {
    name: 'Вася',
      getName: function () {
      return this.name
    }

  },
  getName: function (){
    return this.name
  }
} 
console.log(company.getName()); 
console.log(company.ceo.getName()); 
console.log(company.employees.map(employees => employees.getName()));