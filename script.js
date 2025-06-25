const str = 'Вася Пупкина'
console.log(str.includes('a'));
console.log(str.startsWith('B'));
console.log(str.endsWith('н'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('B', 'Ф'));
console.log(str.replace('П', 'Д'));
console.log(str.replaceAll('a', 'и'));
console.log(str.replace(/a/g, 'u'));
const str2 = ' Вася Пупкина \n';
console.log(str2.trimStart()) 