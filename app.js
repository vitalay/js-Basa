'use strict';
// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);
// document.querySelector('.panel').innerText = 'My text';


// document.querySelector('.button').addEventListener('click', () => {
//   const input = document.querySelector('.input').value;
//   if (!input){
//     return;
//  }
//   document.querySelector('.panel').innerText= input
//   document.querySelector('.input').value = ''
// });

function submitForm(){
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = ''
  // document.querySelector('.notification').style.display = 'block'
  // document.quervSelector(' notification').classList.add('notification_activ')
 document.querySelector('.notification').classList.remove('notification_hidden')
  console.log(document.querySelector('.notification').getAttribute('class'))
  document.querySelector('.notification').setAttribute('key', 1);
document.querySelector('.notification').setAttribute('user-id', 1);
}

function inputChanged(e) {
  if (e.code == 'Enter')
    submitForm()
}
// document.querySelector('.input').addEventListener('keydown', (e) => {
//   if (e.code == 'Enter') {
// submitForm()
// }})
// console.log(document.querySelectorAll('.one')[0].innerText);
// console.log(document.querySelectorAll('.one')[1].innerText);


// console.log(document.querySelector('.one span').innerText);
// console.log(document.querySelector('.one ~ div').innerText);
// console.log(document.querySelector('#two').innerText);
// console.log(document.getElementById('two').innerText);
// console.log(document.querySelector('[user-id="4"]').innerText)

// const panelText = 'Панель';
// const panelClass = 'button';

// const newElement = document.createElement('div');
// newElement.setAttribute('user-id', 1);
// newElement.classList.add('panel');

// newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;

// // newElement.innerText = 'Кнопка'; // ❌ Не нужно вместе с innerHTML

// document.querySelector('.test').appendChild(newElement);
// localStorage.setItem('test', '123')
// localStorage.setItem('test1', true)
// localStorage.setItem('test1', '1234')


// console.log(localStorage.getItem('test1'));
// localStorage.removeItem('test');
// // localStorage.clear();
// console.log(localStorage.getItem('test1'));
// console.log(localStorage.getItem('test'));
const are = JSON.parse('{"a": 1}')
console.log(are);
const are2 = JSON.stringify(are)
console.log(are2);

