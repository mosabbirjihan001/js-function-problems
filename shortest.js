const heights = [54, 55, 56, 57, 58, 59, 60, 53, 52, 51, 50];

function getMin(numbers){
    let min = numbers[0];
    for(num of numbers){
        if(num < min){
            min = num ;
        }
    }
    return min;
}
const min = getMin(heights);
console.log('min value is: ',min);