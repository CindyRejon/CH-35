//comentarios de una sola línea

/*comentarios
multilinea*/

/*alert ("Hola mundo");

console.log("Este es un mensaje para mi consola")

/*var nombre = prompt ("Ingresa tu nombre");
alert("Hola, " + nombre + " Bienvenido a la ch35"); */

/* var numero1 = parseInt (prompt("Ingresa el primer número:"));
var numero2 = parseInt (prompt("Ingresa el segundo número")); 

console.log("suma:" + (numero1 + numero2))
console.log("resta:" + (numero1 - numero2))
console.log("multiplicación:" + (numero1 * numero2))
console.log("división:" + (numero1 / numero2)) */

//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningún cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/*let nombre = "Daniel";
let invitadxsExtras = 2;
let esMayorEdad = true;
let edad = 24;
let invitadxEspecial = null;
let horaDeSalida = undefined;

document.write(nombre);

/*Encasillamiento o tipado
nos es útil para el mantenimiento del código
ya que lo hace más legible y facil de entender,
nos ayuda a la prevención de errores para reducir la probabilidad
de los mismos, mejora el rendimiento de nuestro programa */

/*let numero = 15;
let texto = "hola";

/// con encasillamiento

let numeroEncasillado = Number = 5;
let textoEncasillado = String = "hola"; */

/*typeof palabra reservada para saber que tipo de datos tenemos

console.log(typeof(nombre));

let funcionNumber = console.log(typeof Number(nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas
de texto en números, ambas nos ayudan en este cambio */

/*conversion de number a string

console.log(typeof String(edad));
console.log(typeof edad.toString());

conversion de booolean a number

let numero = Number(esMayorEdad);

console.log(typeof(numero)); 

let texto = String(esMayorEdad);

console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());

let negación = !esMayorEdad;

console.log (negación);

concatenar es unir strings

let saludo = "Hola humanx";
let frase = "el futuro es hoy";

texto = saludo + frase;
console.log(texto);
*/

/*Tipos de datos
> - String (cadenas de texto)
> - Number (númericos)
> - Booleans (booleanos: true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (Objects)
> - Objects (Arrays)
> - Let y Const, así iniciamos variables. También con Var pero no es preferible
/*
console.log(); Nos permite visualizar en consola del navegador el código de Java Script.
console.warn(); Muestra mensaje de advertencia.
console.error(); Muestra un mensaje de error.
console.table();
*/

/*Primer manera de hacerlo*/
let firstName;
firstName = "Daniel"; 
/*Segunda manera de hacerlo*/
let lastName= "Maldonado";

console.log(firstName + " " + lastName); /*Ver codigo en consola, puedes vivir variables y strings*/
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName); 

/*ECMAScript 6(ES6). Interpolación de cadenas
> - Backticks
> - Para variables las invocamos así ${variables}
> - Texto para string
*/
let age = 37;
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo
    ${age} años`);
//console.warn();
console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);
//console.error();
console.error(`Status 404:Failed`);  /*Si queremos que pase pero no sucede,
se mandar un error */

/* 
-Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, 
en el cual se almacena una colección de elementos de manera ordenada.
-Los arrays se pueden manipular mediante métodos específicos.
-Los elementos de una array se contabilizan como índices empezando
por índice 0, por lo cual, el primer elemento del array posee el índice 0.
-Un array posee n cantidad de elementos.
-Se declaran como variables, seguido del signo igual y corchetes. 
Dentro de cada corchete vive un elemento con un tipo de dato.

let arreglo1 = []; //Array vacío
console.log(`Array vacío ${arreglo1}`);

//Los elementos de un array se separan mediante comas
let cars = ["Volkswagen", "BMW" , "Mazda", "Kia"]; //Array de String
console.long(cars);
//Longitud e índice son diferentes. La longitud (lenght) es el número de elementos y el índice corresponde a cada elemento a partir del 0.

console.log(typeof(cars)); /*Checar de que tipo es el array y es objeto*/ 
//Output: object

//Array Numbers
let salariesMxn = [8000, 10000, 12000, 15000, 20000, 25000];
console.long (salariesMxn.length);//Output: 6
console.log (salariesMxn);
/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2),
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/
const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age: 29,
    country: "México",
}
//Mostrando mi array como table
console.log(employee);

//Mostrando mi objeto como table
console.table (cars);
console.table (employee);