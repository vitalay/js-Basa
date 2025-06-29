
'use strict';

const user = {
  firstName: 'Vasy',
  lastName: 'Vasilievich',
  age: 15,
  addUserInfo: function () {
    console.log(`${this.firstName}  ${this.lastName}`);

    const canDrink = () => {
      if (this.age >=  18) {
        console.log('Может Пить');
      } else {
        console.log('Не может пить ');
      }
 
    } 
    canDrink()
  },

  addUserInfoArro: () => {
    console.log(`${this.firstName}  ${this.lastName}`);
  }
}

user.addUserInfo()
user.addUserInfoArro() 
