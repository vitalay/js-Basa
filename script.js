

const sum = 1
console.log(sum);
function sum2 (n) {
  n = n + 1
  if (n > 100) {
    return n
  }
  console.log(n);
  return sum2(n)
}

sum2(sum);

const user = {
  name: 'Anton',
  id: 1

}
const user2 = {
  ...user
}
user.name = 'Vasilisa'
user.id = 2

console.log(user);
console.log(user2);
 