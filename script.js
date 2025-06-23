const raund = [1, 4, 10, 5]

// for (const [index, el] of raund.entries()){
//   console.log(`raund ${index + 1} ${el}`)
// }

raund.forEach((raundEl, i) =>{
  console.log(`Раунд ${i + 1} : ${raundEl}`)
})


const transactionInUSD = [10, -7, 50, -10, 100]
// const transactionInRUB = []
// for (const transaction of transactionInUSD) {
//   transactionInRUB.push(transaction * 60);
// }
  // console. log(transactionInUSD);
  // console. Log(transactionInRUB);
  const transactionInRUB2 = transactionInUSD
        .map((transaction) => transaction * 60);
  console.log(transactionInUSD);
  console.log(transactionInRUB2); 


const operations = [100, -20, 7, 60, -30]
  const result = []
for (const operation of operations) {
  if (operation > 0){
    result.push(operation); 
  }
}
console.log(result);


const positiveOperations = operations.filter(operation =>{
 return operation > 0
})
  console.log(positiveOperations);
const positiveRUBOperations = operations
  .filter(operation => {
   return operation > 0
})
   .map(operation => operation * 60)
console.log(positiveRUBOperations);