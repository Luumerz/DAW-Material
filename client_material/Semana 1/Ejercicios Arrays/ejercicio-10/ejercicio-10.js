let arr = ["Plátanos", "Naranjas", "Pomelos"];

//Con for clásico
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Con for...of
for (let fruta of arr) {
    console.log(fruta);
}

//Con forEach
arr.forEach(function (fruta) {
    console.log(fruta);
});

//Con map
arr.map(fruta => console.log(fruta));