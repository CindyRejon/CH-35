//Operador
// Es un signo que especifica que debe efectuar una determinada operación
/*Operaciones aritmeticos (+,-,*,/,%,++,--)
Operadores de asignacion (=) 
Operadores logicos (&&,||,!)
Operadores de comparación (==,===,!=,!==,>,<,>=,<=)
Operadores de cadena (toLowerCase, ToUpperCase, trim, toString, concat, +)

Operadores aritmeticos
(+) :Suma, se utiliza para sumar dos numeros
(-) :Resta, se utiliza para restar un numero de otro
(*) :Multiplicación, se utiliza para multiplicar un número con otro
(/) :División, se utiliza para dividir un numero entre otro 
(%) :Residuo, (ejemplo 10%3 es igual a 1, porque se dividio entre 3 y es lo que sobra, ayuda a 
    saber si es numero par o impar) se utiliza para obtener el resto de una
    división
(++) :Incremento, (lo hace de 1 en 1) aumenta de uno en uno la cantidad
o el numero
(--) :Decremento, disminuye de uno en uno la cantidad o el numero
*/
let numero1 = 10;
let numero2 = 8;
suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2; //
residuo = numero1 % numero2;//

incremento = numero1;
incremento ++;

decremento = numero2;
decremento --; //

console.log(suma);
console.log (resta);
console.log (multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 950;
let porcentajeDescuento = 20;
let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = (precioReal-cantidadDescuento);
console.log ("Precio real:$" + precioReal);
console.log ("Porcentaje de descuento" + porcentajeDescuento + "%");
console.log ("Cantidad de descuento" + cantidadDescuento);
console.log ("Precio con descuento" + precioConDescuento);

/*Operadores de asignación
(=): Este operador no compara, lo que hace es asignar*/

//let frutas = manzana;


/*Operadores de comparación
 (==): Igualdad, compara si nuestros valores son iguales
 */
let numero3 = 8;
let texto = "10";
console.log(numero3 == texto); //siempre dan true o false

/* (===): Igualdad estricta, compara si los valores son iguales
y el tipo de dato */
let numero4 = 10;
let texto1 = "10";
console.log(numero4 === texto1);

// (!=): Desigualdad o distinto, este operador verifica si 2 valores no son
//iguales y de ser necesario realiza la conversión */
let precioCaja = 1499;
let precioMaximo = 1500;
if (precioCaja != precioMaximo) //!= significa es diferente a */
{
console.log ("El precio del producto no es igual al precio maximo");
}
else {
    console.log ("El precio del producto es igual al precio maximo permitido");
}
//otro ejemplo para que sean iguales, da true o false//
let numero5 = 10;
let numero6 = "10";
if (numero5 != Number(numero6)){
    console.log("Son diferentes");
}
    else {
        console.log("Los valores son iguales");
    }

/* (!==)Desigualdad estricta, este operador verifica si dos valores
no son iguales, pero a diferencia de (!=) en este caso ambos valores deben
tener el mismo tipo y valor */
let numero7 = 50;
let numero8 = "50";

if (numero7 !== numero8){
    console.log ("Los valores son diferentes");
}
else {
    console.log("Los valores son iguales");
}

// (>) :Mayor, indica si un valor es mayor que otro
let puntuacionFinal = 85;
let puntuacionRequerida = 102;
console.log (puntuacionFinal > puntuacionRequerida)

// (<) :Menor,indica si un valor es menor que otro
let anios = 20;
let aniosLimite =30;
console.log(anios < aniosLimite)

// (>=) Mayor o igual que, nos dice si un valor es mayor 
//o igual a otro
let edad= 30;
let edadNecesaria = 18;
console.log(edad >= edadNecesaria);

// (<=) Menor o igual que, nos indica si un valor es menor
// o igual que a otro
let temperatura= 14;
let temperaturaMaxima= 21;
console.log(temperatura <= temperaturaMaxima);

//Ejercicio 1
let edad1 = 70;
let edad2 = 60;

if (edad1 >= edad2){
    console.log ("Es mayor");
    }
    else {
        console.log ("Son iguales");
    }
//Ejercicio 2

let asignaturaA = "Español";
let asignaturaB = "Mate";

if (asignaturaA !== asignaturaB){
console.log ("No son iguales");
}
else {
    console.log ("Son iguales");
}

/*Operadores logicos
(&&) AND se utilizan cuando las 2 condicones deben
cumplirse */
let mayoriaDeEdad = 18;
let tieneIdentificacion = true;

if (mayoriaDeEdad >= 18 && tieneIdentificacion){ //necesitamos ambos (tener 18 e identificacion) para true (rentar)
    console.log("Puedes rentar el salon");
} else {
    console.log("No puedes rentar");
}

// (||) OR se utilizan cuando se debe cumplir una condición de las 2
let esPrime = false;
let descuento = true;
if (esPrime || descuento){
    console.log("Califica para descuento");
} else{
    ("No califica para descuento");
}
// (!) NOT se utiliza para negar el valor de una condición
let esDiaLibre = false;
if (!esDiaLibre){
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}

//Operadores de cadena
//toLowerCase  :Cambia nuestro string a minusculas
let mensajeUsuario = "Bienvenidx a la Tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);

//toUpperCase :Cambia nuestro string a mayusculas
let escritoUsuario = "hola mundo"
let cambioMayusculas = escritoUsuario.toUpperCase();
console.log(cambioMayusculas);

//trim :Quita los espacios
let aviso = "   CH35   Rifa   "
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString :Convierte un tipo de dato number en string
let numero= 30;
let cadenas = numero.toString();
console.log(cadenas);

//concat :Concatenar o conjuntar todo
let nombre = "Cindy";
let apellido = "Rejon";
let nombreCompleto = nombre.concat(" ", apellido);
console.log(nombreCompleto);

/* Expresiones 
expresion aritmetica 
let operacion = 14 + 25 * 12; combina la suma con multiplicación
expresion de cadena
let notificacion = "Casi", + "Anio nuevo"; expresion concatenando
expresion logica
let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos
y de comparacion
expresion de asignación
let frasco = chocolates; asigna el valor a la variable
*/

//
