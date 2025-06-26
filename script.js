const users = {
  name: 'Ivan',
  sername: 'Efimov',
  age: 24,

 fullName: function () {
     return this.name + ' ' + this.sername + ' Возраст: ' + this.age
  }
}
 
console.log(users.fullName());