const products = [
    { name : 'Dress' , price : 300 , Quantity : 2},
    { name : 'shirt' , price : 100 , Quantity : 3},
    { name : 'pant' , price : 700 , Quantity : 5},
    { name : 'others' , price : 1200 , Quantity : 1},
 ]
 
 function cartTotal(products){
    let sum = 0;
    for(const product of products){
        // const thisProductCost = product.price * product.Quantity;
        // sum = sum + thisProductCost ;
        sum = (sum ) + product.price * product.Quantity ;
    }
    return sum ;
 }

 const total = cartTotal(products);
 console.log(total);