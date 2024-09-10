function fullName(first ,second){
    if(typeof first !== 'string'){
        return 'Please Provide a string.';
    }
    else if(typeof second !== 'string'){
        return 'enter string';
    }
    else{
        return first +" " + second ;
    }
}

const full = fullName('hello', 'hi');
console.log(full);

// -----------------------------



function getPrice(product){
    console.log(typeof product);
    if(typeof product !== 'object'){
        return 'Please provide object.'
    }
    const price = product.price;
    return price ;
}

// const price = getPrice({name : 'Phone', price : 35, color : 'blue'})
const price = getPrice(5)
console.log(price);

// ---------------


function getSecond(numbers){
    console.log(typeof numbers);
    // if(typeof numbers !== 'array'){
    //     return 'Provide Array';
    // }
    console.log(Array.isArray(numbers));
    
    // if(Array.isArray(numbers) !== true)

    if(Array.isArray(numbers) === false){
        return 'provide an array';
    }
    const second = numbers[1];
    return second;
}

const result = getSecond([2, 4, 55, 3, 33]);
// const result = getSecond(5,6,7,74);

console.log(result);
