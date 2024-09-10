function deleteInvalids(array) {
    if(Array.isArray(array)=== false ){
         return 'Invalid Array';
    }
  let numberArray = [];
  for (let element of array) {
    if (typeof element === "number" && isNaN(element) === false) {
      numberArray.push(element);
    }
  }
  return numberArray;
}

const result = deleteInvalids([1, null, 18, undefined, -18, "this", NaN]);
const result1 = deleteInvalids(['1', {num : 2}, NaN]);
const result2 = deleteInvalids( {num : [1, 2, 3]} );
console.log(result, result1, result2);

