const raund = [1, 4, 10, 5]

// for (const [index, el] of raund.entries()){
//   console.log(`raund ${index + 1} ${el}`)
// }

raund.forEach((el, i) =>{
  console.log(`Раунд ${i + 1} : ${el}`)
})