// const userData = ['Антон', 18,' Москва',  3, 4, 5];
// const [name, age, city, ...numbers] = userData;
// console.log(name, age, city, numbers);


// Дан произвольный url -
//   "https://purpleschool.ru/course/javascript'
// Нужно сделать функцию, которая выводит в консоль:
// - Протокол
//   (https)
//   - Доменное имя(purpleschool.ru)
//     - Путь внутри сайта(/course/javascript)

const url = 'https://purpleschool.ru/course/javascript'
//   urlArr = url.split('/'),
//   protocol = urlArr[0],
//   domainName = urlArr[1],
//   path = urlArr[2];

// console.log(protocol, domainName, path);

function getUrlParts(url) {
  const [protocol, _, host, ...path] = url.split('/');
  
  // console.log(protocol, _, host, path); 
  console.log(`Протокол: ${protocol.split(':')[0]}`);
  console.log(`Доменное имя: ${host}`)
  console.log(`Путь внутри сайта: /${path.join('/')}`);
}
getUrlParts(url)
