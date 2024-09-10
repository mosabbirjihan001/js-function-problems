// problem = name

function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid'
    }
    // let lastLetter = name.slice(-1)
  let lastLetter = name[name.length-1].toLowerCase();
  console.log(lastLetter);
//   let result = false;
  let checkArray = ['a', 'e', 'y', 'i', 'o', 'u', 'w']
//   for(let char of checkArray){
//     if(char === lastLetter){
//         result = true;
//     }
//   }

 let result = checkArray.includes(lastLetter);

  return result ? 'Good Name' : 'Bad Name'
}

let result = checkName('te');
console.log(result);