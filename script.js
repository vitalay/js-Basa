
'use strict';

// function changeBalance() {
//   let balance = 0;
//   let key = 'qqq'
//   return function (sum) {
//     balance += sum;
//     key = 'www'
// console.log(`Баланс: ${balance}`);
//   }
//   }
//     const change = changeBalance();
//     change(100);
//     change(-50); 
//     change(200);
// console.dir(change);

// const change2 = changeBalance();
// change2(100); 
// console.dir(change2);


/*
Сделать функицю пользовтеля, которая берёт за основу
userInfo и за счёт замыкания создаёт новый объект, с
котором можно работать как user1().increse(100)
*/
const userInfo = {
  balance: 0,
  operations: 0,
  increse(sum) {
    this.balance += sum;
    this.operations++;
  }
}
function user() {
  const userobj = {
    balance: 0,
    operations: 0,
    increse(sum) {
      this.balance += sum;
      this.operations++;
    }
  }
  return function() {
    return userobj;
  }
}
    const user1 = user();
    user1().increse(100);
    user1().increse(100);
    console.log(user1());

    const user2 = user();
    user2().increse(100);
    console.log(user2());
// function createUser() {
//   let balance = 0;
//   let operations = 0;

//   return {
//     increse(sum) {
//       balance += sum;
//       operations++;
//       return this; // для цепочки
//     },
//     getInfo() {
//       return `Баланс: ${balance}, Операций: ${operations}`;
//     }
//   };
// }

// const user1 = createUser();
// user1.increse(100).increse(50);
// console.log(user1.getInfo()); // Баланс: 150, Операций: 2
