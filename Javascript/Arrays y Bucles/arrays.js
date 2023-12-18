/*
*==Arrays==
*Es una colección o agrupación de elementos en una misma variable, 
cada uno de ellos ubicados por la posicion que ocupa el array.
*Los arrays se utilizan para almacenar y organizar datos de manera
más eficiente.
*/
//* Crear un Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
//*Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log(comida);
//*Array mixto
const mixto = [
"Pluma", 8, true,
{ nombre:"Mar"}
];
console.log(mixto);
//*Array vacio
const lista = [];
console.log(lista);
//*Agregar elementos a mi array vacio
lista[0] = "Leche";
lista[1] = "Carne de pollo";
lista[2] = "Espinaca";
lista[3] = "Huevo";
console.log(lista);

//*Otra manera de crear Arrays
const frutas = new Array ("Manzana", "Naranja", "Peras", 
"Mandarinas", "Uvas");
/*
*Esta sintaxis se puede emplear en Arrays porque son Objects,
es una manera de mandar a llamar un nuevo Objeto de tipo Array.
*/
console.log(frutas);

//*Longitud de un array
console.log (frutas.length);

//*Acceder a los elementos del Array acorde a su indice
console.log(frutas[3]);//mandarinas
console.log(frutas[5]);//undefined

//*Modificar un elemento del array  por el índice
const cremeria = ["Jamon", "salchicha", "queso adobera",
 "queso cotija", "yoghurt"];
 console.log(cremeria);
 cremeria[2] = "Quesillo"; //para cambiar de queso adobera a quesillo
 cremeria[4] = "Danonino";
 console.log(cremeria);

 //*Arreglo de arreglos o multidimensional
 console.log("Arreglo de arreglos");

 //* Estados : Estado de México, Jalisco, Yucatán, Sonora, Oaxaca, CDMX.

 //* Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos.

 const estados = ["Estado de México", "Jalisco", "Yucatán", "Sonora",
"Oaxaca", "CDMX"]; //este es 0

 const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos",
  "Tlayuda", "Tacos"]; //este es 1

  const menu = [estados, platillos];
  console.log(menu[0],[2]); 
  /*//para llamar estado es 0 y para llamar platillos es 1
  //, el segundo corchete [] es para llamar la variedad de estados o platillo, según su orden.
//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
*/
console.log(`El ${menu [0][2]} también se come ${menu [1][2]}`);
/*
Métodos de Arrays
*Métodos de cola (queue). Los metodos de cola implica agregar elementos
al final de array y eliminar elementos al inicio del array. Sigue el 
principio de FIFO (First-in-first-out) lo que significa el primer elemento
añadido es el primer elemento eliminado.
*push
*shift
*unshift

*Método de pila (Stack). Implica agregar elementos al final del array
y eliminar elementos del final del array. Sigue el principio LIFO
(Last-in-first-out)que significa el ultimo elemento añadido
es el primero en ser eliminado. El último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O), ese es LIFO
*
*push
*pop
*/
console.log("Metodos de Arrays");
const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//*pop() Eliminar el último elemento del array
let popch35 = ch35.pop(); 
console.log(popch35);//devuelve el dato eliminado, , quito a Enrique
console.log(ch35)//elimina el dato de la lista 

//*push () Agregar al final del array
let pushch35 = ch35.push("Mony"); //agrego a mony
console.log(ch35);

//*shift () quitar primero del array, se quito a dani
let shiftch35 = ch35.shift();
console.log(ch35);

//*unshift agregar al principio del array, se agrego a dani
let unshiftch35 = ch35.unshift("Dany");
console.log(ch35);

//*reverse () cambia el sentido del ordenamiento del array
let reversech35 = ch35.reverse();
console.log(ch35);
/* Investigar:
*sort
*forEach
*slice
*splice
*indexOf
*/