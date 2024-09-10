function shoppingQuantity(shirtQuantity , pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;
    
    const totalShirt = shirtPrice * shirtQuantity;
    const totalPant = pantPrice * pantQuantity ;
    const totalShoe = shoePrice * shoeQuantity ;

    const allPrice = totalPant + totalShirt + totalShoe ;

    return allPrice ;
}

const all = shoppingQuantity(2,2,2);
console.log(all);