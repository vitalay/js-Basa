// const task = ["задача 1", "задача 2", "задача 3", "задача 4", "задача 5", "задача 6"]

// for (let i = 0; i < task.length; i++) {
//   // if (task[i] === "задача 2"){
//   //   continue;
//   // }
//   if (task[i] === "задача 4") {
//    break;
//   }
//   console.log(task[i]);

  
// }
// _________________________________________________________
// Задача вывести в консоль строку "Я люблю
// JS
// !" из массива,
// проходя циклом в обратном порядке, не используя метод reverse.
const arr = ['!', 'JS', 'люблю', 'Я'];

const arr2 = []
// if (arr[i] === "JS") {
//   break;
// }
for (let i = arr.length - 1; i >= 0; i--){

  arr2.push(arr[i])

}
console.log(arr2.join(" "))

console.log(arr.reverse().join());