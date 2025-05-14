//Formas de crear arrays en JavaScript


//1. Usando Array constructor

let arr1 = new Array(5); //Array de 5 elementos vacíos
let arr2 = new Array("Plátanos", "Naranjas", "Pomelos", "Fresas", "Limones"); //Array con 5 elementos

//2. Usando [] (forma recomendada)

let arr3 = ["Plátanos", "Naranjas", "Pomelos", "Fresas", "Limones"]; //Array con 5 elementos
let arr4 = []; //Array vacío

//3. Usando Array.of()

let arr5 = Array.of("Plátanos"); //Array con un solo elemento
let arr6 = Array.of("Plátanos", "Naranjas", "Pomelos", "Fresas", "Limones"); //Array con 5 elementos
let arr7 = Array.of(); //Array vacío

//4. Usando Array.from()
let arr8 = Array.from("Plátanos"); //Crea un array a partir de una cadena -> ['P', 'l', 'á', 't' , 'a', 'n', 'o', 's']
let arr9 = Array.from([1, 2, 3], x => x * 2); //Crea un array a partir de otro array y aplica una función -> [2, 4, 6]

//5. Usando split() desde String 
let arr10 = "Naranjas".split(""); // ["N", "a", "r", "a" , "n", "j", "a", "s"]
let arr11 = "Plátanos, Naranjas, Pomelos, Fresas, Limones".split(","); // ["Plátanos", " Naranjas", " Pomelos", " Fresas", " Limones"]

//6. Usando el operador de propagación (spread operator)
let arr12 = [..."Fresas"]; // ["F", "r", "e", "s", "a", "s"]
let arr13 = [...arr3]; //Copia el contenido de arr3 a arr13 -> ["Plátanos", "Naranjas", "Pomelos", "Fresas", "Limones"]
let arr14 = [...arr3, ...arr8]; //Concatena arr3 y arr8 -> ["Plátanos", "Naranjas", "Pomelos", "Fresas", "Limones", "P", "l", "á", "t" , "a", "n", "o", "s"]