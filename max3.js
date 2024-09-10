const jim = 56 ;
const kim = 780 ;
const tin = 99 ;

if (jim > kim && jim > tin){
    console.log('jim is bigger', jim);
}
else if( kim > jim && kim > tin){
    console.log('kim is bigger', kim);
}
else{
    console.log('tin is bigger', tin);
}


// Max of Three-----

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log('num1 is bigger', num1);
    }
    else if ( num2 > num1 && num2 > num3){
        console.log('num2 is bigger', num2);
    }
    else{
        console.log('num3 is bigger', num3);
    }
}

const max = maxOfThree(11,22,31);



// math.max

const maxUnlimited = Math.max(32, 43, 55, 111);
console.log(maxUnlimited);