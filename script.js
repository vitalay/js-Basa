


// // const user = ['Вася', 'Пупкин', 25]
// const user = {
//   name: 'Вася',
//   surname: 'Пупкин',
//   age: 24,
//   skills: [
//     ' Программирование',
//     ' Готовка'
//   ],
//     eduBasic: 'Школа 10',
//       eduPro: 'МФТИ'
// }
// console.log(user.city);
// console.log(user.skills);
// console.log(user['skills']); 
// const level = 'Pro'
// console.log(user['edu' + level]);
// // const res = prompt ('Введите свойство');
// user.city = 'Москва';
// user['city'] = 'Москва';
// console.log(user.city);
// user.age = 30;
// user['age'] = 30;
// console.log(user)


/* отсортировать пользователей по возрасту */
const users = [
  { name: 'Вася', age: 30 },
  { name: 'Катя', age: 18 },
  { name: 'Аня', age: 40 },
  { name: 'Петя', age: 25 }
]
const sortedUsers = users.sort((a, b) => a.age - b.age)
console.log(sortedUsers)