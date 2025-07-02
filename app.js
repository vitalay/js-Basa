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

