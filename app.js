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
}

function inputChanged(e) {
  if (e.code == 'Enter')
    submitForm()
}
// document.querySelector('.input').addEventListener('keydown', (e) => {
//   if (e.code == 'Enter') {
// submitForm()
// }})

