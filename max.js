const disha = 56 ;
const misha = 98 ;

if(disha > misha){
    console.log('disha is big');
}
else{
    console.log('misha is big');
}
// function

function maxNum(num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = maxNum(4,7);
const max1 = maxNum(44,98);
console.log(max);
console.log(max1);