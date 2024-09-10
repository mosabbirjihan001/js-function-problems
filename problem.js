function calculateMoney(ticketSale){
   if(ticketSale < 0){
    return 'Error. Provide Number.'
   }
   let remainingAmount = ticketSale * 120 - (500 + 8 * 50)
   return remainingAmount;
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-154));
