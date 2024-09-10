function monthlySavings(arr, livingCost) {
  if (Array.isArray === false || typeof livingCost !== "number") {
    return "Invalid Input";
  }
  // calculate total income
  let totalIncome = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      // deduct tax amount
      let tax = payment * 0.2;
      // totalIncome +=payment - tax;
      totalIncome = totalIncome + (payment - tax);
    } else {
      totalIncome += payment;
    }
  }
  let savings = totalIncome - livingCost ;
  if( savings >= 0){
    return savings ;
  }
  else{
    return 'earn more';
  }

//   return savings >=0 ? savings : 'earn more';
}

const savings = monthlySavings([1200, 1000, 4000,5000, 6000, 7000], 10000);
console.log(savings);