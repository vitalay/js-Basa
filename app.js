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

function cengeClick(){
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input
  document.querySelector('.input').value = ''
}
