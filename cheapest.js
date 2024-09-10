const phones = [
    {name : 'Samsung', price : 30000 , camera : '12mp', color : 'black'},
    {name : 'IPhone', price : 130000 , camera : '12mp', color : 'black'},
    {name : 'real', price : 34000 , camera : '12mp', color : 'black'},
    {name : 'Xiaomi', price : 39000 , camera : '12mp', color : 'black'},
    {name : 'HTC', price : 39000 , camera : '12mp', color : 'black'},
    {name : 'Walton', price : 10000 , camera : '12mp', color : 'black'}
]

function getCheapestPhones(phones){
    let min = phones[0];
    for( const phone of phones){
      if(phone.price < min.price){
        min = phone ;
      }
    }
    return min;
}

const cheap = getCheapestPhones(phones);
console.log('cheapest phone is :', cheap);