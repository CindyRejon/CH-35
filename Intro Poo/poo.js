/* paradigmas de programacion
Programacion imperativa: Se basa en instrucciones detalladas ejecutando
un flujo o una secuencia determinada

Programacion basada en eventos: Se basa en la gestión y respuesta de eventos

Programación declarativa: Explicar lo que queremos obtener

Programación orientada a objetos: Toma cierta información o estructura
del mundo real (objetos) para poder explicar ciertas cosas, como sus
caracteristicas (propiedades o atributos) y sus comportamientos o acciones
(metodos)

*/
//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo
//de objeto y crear instancias de este tipo de objeto

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

//objetos
//El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos
//para inicializar un objeto es necesario definir un constructor que tomara los atributos 
//clases=molde objeto=gomita constructor=cheftsito atributo=ingredientes

constructor(nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;  
}

    comer(){
        console.log("Bon apetit");
    }//metodo comer

    bailar(){
        console.log("Dale hasta el suelo");
    }//metodo bailar

    mostrarInfo(){
        console.log("Nombre:", this.nombre); //con this. le señalamos que estamos manipulando
        console.log("Apellido:", this.apellido);
        console.log("Edad:", this.edad);
        console.log("Email:", this.email);
        console.log("Telefono:", this.telefono);
    }
}
let usuario1 = new persona ("Cindy", "Rejón", 33, "cindy_rejon@hotmail.com", "9991850515")
let usuario2 = new persona ("Estefania", "Cabrera", 31, "lalindatefi@hotmail.com", "9831348014")
let usuario3 = new persona ("Luvia", "Rejón", 42, "lurejon@hotmail.com", "983 113 4166")
let usuario4= new persona ("Solangel", "Rejón", 33, "solangel@hotmail.com", "9831718487")
let usuario5 = new persona ("Elena", "Rios", 43, "elenrios@hotmail.com", "9831344453")

console.log(usuario1);//imprimir objeto completo

console.log(usuario4.email);//imprimir un atributo especifico

console.log(usuario1.email,usuario2.email,usuario3.email,usuario4.email,usuario5.email,)

usuario1.bailar();//invocar el método de bailar, lleva parentesis vacio porque manda a llamar
usuario1.mostrarInfo(); //muestra info de persona: nombre, edad,etc.

console.log(usuario3.telefono,usuario5.apellido);

//Pilares de la programación orientada a objetos

/*Herencia
Polimorfismo
Encapsulamiento
Abstracción: traemos terminos y objetos del mundo real a la programación
*/

//Herencia, nos permite heredar a clases inferiores para poder optimizar
//el programa

class arrendadxr extends persona { //es subclase, extends es una extension que dice de donde vengo, persona es el padre, esta clase solo sería un "hijo"
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

/*class arrendadxrGuadalajara extends arrendadxr{} //el nieto que viene de la herencia anterior, se le dice que viene del arrendedor,porque ant. se declaro que arrendendor viene del padre
 */

constructor (nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
    super (nombre, apellido, edad, email, telefono);
    this.capacidad = capacidad;
    this.costo = costo;
    this.nombreLugar = nombreLugar;}

mostrarInfo() {
    console.log("capacidad: ", this.capacidad);
    console.log("costo: ", this.costo);
    console.log("Nombre del lugar: ", this.nombreLugar);}
}

let arrendadxr1 = new arrendadxr ("Cindy", "Rejon", 30, "cindy_rejon@gmail.com", "9991850515", 100, 50000, "salonG")

console.log(arrendadxr1); //muestra toda info de arrentadorx
console.log(arrendadxr1.costo);
arrendadxr1.mostrarInfo(); //muestra capacidad, costo y nombre de lugar
/* 
   class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();*/

/* Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulados en común

nota: La posibilidad de realizar cambios en distintos objetos que comparten atributos
 
Ejemplo de Polimorfismo:

class Animal {
  sonido() {
      console.log('Hace un sonido genérico');
  }
}

class Perro extends Animal {
  sonido() {
      console.log('Guau guau');
  }
}

class Gato extends Animal {
  sonido() {
      console.log('Miau');
  }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"
gato.sonido(); //el mismo método sonido(), para gato muestra "miau"
 
*/
class producto{

marca = ""
precio = 0

constructor (marca, precio){
this.marca = marca;
this.precio = precio;}

mostrarDescripcion(){
console.log("Marca ");
console.log("precio ");
}

}

let producto1 = new producto ("cercave", 85);

//Encapsulamiento: es ocultar la implementación de un objeto y datos necesarios 

class Usuario {
#contraseña; 

constructor(userName, correo, contraseña){
this.userName = userName;
this.correo = correo;
this.contraseña = contraseña;}


verificarContraseña(contraseña){
    return this.#contraseña === contraseña;} //encapsula contraseña para que no se vea 
}

//Abstracción es traer objetos del mundo real y poder aplicarlos a la
//Programacion mediante clases, metodos, constructores y objetos.

//JSON, es un objeto de tipo cadena
//Los objetos de tipo Json es un formato de intercambio de datos
//ligero, accesible, estructurado,manipulable (DOM) y que nos brindan una mejor comunicación
//entre el cliente y el servidor. Esto gracias  a que son mas fexibles
//y generalmente se ejecutan con fetch

let objetoJson = { //llevan strings (comillas) "nombre" y así se identifican
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}
console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}
console.log(objetoLiteral);

//Principios solid
/*
*principio de responsabilidad unica (Single Responsability Principle SRP)
Una clase de tener asignada una tarea o responsabilidad específica y esta no deberia de cambiar

*Principio abierto/cerrado (open/closed principle OCP): una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma

*Principio de sustitución de Liskov (Liskov sustitution principle LSP) un clase hijo puede sustituir objetos de una clase padre 

*Principio de segregación de interfaces (Interface segregarion Principle ISP)
Delimitar los métodos que necesito y dejar fuera los innecesarios

*Principio de inversión de dependencias (Dependency Inversion Principle DIP)

//TAREA: Programa que conste de una clase llamada alumno que tenga como atributos nombre
y calificación.Definir metodos para inicializar sus atributos (constructor), imprimirlos y mostrar 
un mensaje con el resultado de si la calificacion es aprobatoria o no 

//Atributos:
Nombre
Calificación

//Metodos
imprimirCalifación
evaluacion

La calificacion aprobatoria es de 6
if para evaluar la calificación con operadores >=
*/

class alumnx{
    nombre = "";
    calificacion = 0;

    constructor(nombre,calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
   
 imprimirCalificacion(){ // Método para imprimir la calificación del alumno

console.log(`${this.nombre} tiene una calificación de ${this.calificacion}`);

}

 evaluacion() {// Método para evaluar si el alumno aprobó o no
    if (this.calificacion >= 6) {
        console.log(`${this.nombre} ha aprobado.`);
    } else {
        console.log(`${this.nombre} no ha aprobado.`);
    }
}
}
// Crear instancias (objetos) de la clase Alumno
let alumnx1 = new alumnx("Cindy", 5);// Instanciar un objeto con nombre "Cindy" y calificación 5
let alumnx2 = new alumnx("Rocio", 9);
let alumnx3 = new alumnx("Rodrigo", 8);

// Utilizar los métodos de la clase Alumno para imprimir la calificación y la evaluación de cada alumno
alumnx1.imprimirCalificacion();// Llama al método para imprimir la calificación del alumno1
alumnx1.evaluacion();// Llama al método para evaluar y mostrar si el alumno1 aprobó o no

alumnx2.imprimirCalificacion();//muestra info de persona: nombre, edad,etc
alumnx2.evaluacion();

alumnx3.imprimirCalificacion();
alumnx3.evaluacion();

