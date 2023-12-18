/*
Funciones. Son bloques de código con instrucciones que se pueden 
reutilizar las veces que sean necesarias.
Algunas funciones reciben parámetros y otras no reciben parámetros.
NOTA: La funciones normales se llaman funciones por declaración*/
//Función que permite saludar
function saludar() {
    console.log("Hola desde una función");
} 
//Ejecutar la función con el nombre de la función y los parámetros
saludar ();

//Hoisting. Característica de una función que permite invocarla desde antes de su inicialización, es decir,se puede invocar antes del bloque de código o después//
//Se invoca en la línea 11 y 18
function saludar() {
    console.log("Hola invocando la función con hoisting");
}
saludar();

//Funciones que retornan algo. Para que una función retorne algo (un string, un operación, una variable), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return

function greeting () {
    return "Hola desde una función que retorna";
}
console.log(greeting()); //se le dice a donde retorna para que imprima

//Función que retorna y recibe parámetros
function sumar(x, y) {
 return x + y;
}
let resultado = sumar (255, 245);
console.log (`El resultado de sumar x + y es ${resultado}`);

//Función para calcular el cuadrado de un número 
function calcCuadrado (numero) {
  return numero * numero;
}
 let resultCuadrado = calcCuadrado(5);
 console.log(resultCuadrado);

 //---Funciones flecha (Arrow function)---. Es una manera de declarar una función por declaración, sintetizando código y haciendolo más legible.
 //Función flecha: const calcCubo = (number) {}  //Sirve para calcular el cubo de un número.

 const calcCubo = (number) => {
   return number * number *number;
 } 
 let resultCubo = calcCubo(3);
 console.log(resultCubo);

 // Funciones anónimas. Son un tipo de funciones que se declaran sin 
 //nombre de función y se alojan en el interior de una variable. Se hace
 // a ellas cada vez que las utilicemos.
 //Las funciones anónimas no permiten el hoisting (no se pueden invocar antes de inicializarlas)
 const mensaje = function () { //const es la variable y ella si tiene nombre
    return "Este es un msj desde una función anónima";
 }
 console.log(mensaje()); //se manda a llamar por la variable, porque no hay nombre, es anonima

 //Callbacks. Es pasar una función B por parámetro a una función A, de modo
 // que la función A pueda ejecutar esa función de forma genérica desde su código.
//Función B
const functionB = function () {
    console.log("Ejecutando función B");
}
//Función A, que mandará a llamar a la función B
const functionA = function (callback) {
    callback();
}
functionA(functionB);

