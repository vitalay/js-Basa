
'use strict';

function addNum(num1, num2){
    console.log(this);
  return num1 + num2;
}

const addNum2 = (num1, num2) =>{
   
    return num1 + num2;
}

const user = {
   name: 'John',
    surname: 'Fifi' ,
  
    getFullName: function(){
  
        return this.name + ' ' + this.surname;
    }
  
  };
console.log(user.getFullName());

user.getFullName();

const user2 = {
  name: 'Марина',
  surname: 'Катц'
 } ;
  user2.getFullName = user.getFullName;
  user2.getFullName() ;
  const getFullName = user2.getFUllName;
