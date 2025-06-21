const rols = ['Ana', 'Vika', 'Саша']
// console.log(rols[rols.length - 1]);
// console.log(rols.at(0));

function as (el) {
  return el * el
}
console.log(as(3));

const ass = rols.push('kola')
console.log(ass);
console.log(rols);
rols.unshift("nikita")
console.log(rols);
rols.pop()
console.log(rols);
rols.shift()
console.log(rols);

const ded = ['Anaqq', 'Vikaqq', 'Сашаqqq', 'varrr'] 
const ded2 = ded.splice(2)
console.log(ded);
console.log(ded2);

const ded3 = ['kolaqq', 'varrrr']
const ded4 = ded.concat(ded3)
console.log(ded4);


const roles = ['user', 'admin']
const url = 'auth/user/login';
const res  = url.split('/');
console.log(res);
console.log(roles.join('-'))
console.log(roles.includes('admin'))


// Дан список задач
// const tasks = ['Задача 1'];
// Сделать функции:
// - Добавление задачи в конец
//   - Удаление задачи по названию
//     - Перенос задачи в начало списка по названию
// Всегда меняем исходный массив


// const tasks =  ['Задача 1'];

// function addTask(task) {
//   tasks.push(task)
//   return tasks
// }
// console.log(addTask('Задача 2'));

// function removeTask(task) {
//   const index = tasks.indexOf(task)
//   if (index !== -1) {
//     tasks.splice(index, 1)
//   }
//   return tasks
// }
// console.log(removeTask('Задача 1'));


const tasks = ['Задача 1'];

function Add(task) {
  tasks.push(task);
}

function Remove(task) {
  const index = tasks.indexOf(task); // исправлено index0f -> indexOf
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function Prioritize(task) {
  const index = tasks.indexOf(task); // исправлено index0f -> indexOf
  if (index === -1) {
    return;
  }
  const oldTask = tasks[index];
  tasks.splice(index, 1);
  tasks.unshift(oldTask);
}

Add('Задача 2');
Add('Задача 3');
console.log(tasks); // ['Задача 1', 'Задача 2', 'Задача 3']

Remove('Задача 1');
Prioritize('Задача 3');
console.log(tasks); // ['Задача 3', 'Задача 2']
