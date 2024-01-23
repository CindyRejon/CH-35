package org.generation.letras;

public class LetrasMain {
public static void main(String[] args) {
	//Instanciar objetos (Letras y Contador)
	Letras letras = new Letras();
	letras.mostrarMensaje("Escribe un texto y te mostraré el número de vocales, consonantes, símbolos y números") ; //ya es un metodo y se puede llamar las veces que sea
	String palabra = letras.LeerEntrada(); //Guardamos el texto introducido por el usuario en una variable 
	
	//Invocar metodos que me permiten contar los caracteres
	
	Contador contador = new Contador();
	
	int totalVocales = contador.contarVocales(palabra);
	System.out.println("Hay " + totalVocales + " vocales");
	
	int totalNumeros = contador.contarNumeros(palabra);;
	System.out.println("Hay " + totalNumeros + " numeros");
	
	int totalConsonantes = contador.contarConsonantes(palabra);;
	System.out.println("Hay " + totalConsonantes + " consonantes");
}
}
