let arr = [5, 2,, 3, -2, 7,, 9];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== undefined){
        sum += arr[i];
    }
}

console.log(sum); // 24