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