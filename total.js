const numbers = [300, 400, 600, 1200];

const products = [
   { name : 'Dress' , price : 300},
   { name : 'shirt' , price : 400},
   { name : 'pant' , price : 600},
   { name : 'others' , price : 1200},
]

function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log(total);