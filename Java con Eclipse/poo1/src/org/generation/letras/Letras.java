package org.generation.letras;
import java.util.Scanner;
/**
 * Crear un programa que le solicite un mensaje al usuario y cuente cuantas vocales, consonantes, números y caracteres
 * posee dicho mensaje
 * Letras: métodos para interactuar con el usuario
 * LetrasMain: vamos a instanciar los objetos
 * Contador: métodos para contar vocales, consonantes, número y símbolos
 */

public class Letras {
	//Para que nuestro usuario interactue ,definimos un Scanner
		Scanner scanner= new Scanner(System.in);
		
		//metemos el Scanner dentro de un método
		public String LeerEntrada() { //el metodo es leerEntrada
			return scanner.nextLine(); //es line porque es tipo string
		}
		
		//Método para proporcionar contexto al usuario
		public void mostrarMensaje(String mensaje) {
			System.out.println(mensaje);
		}
	}
	
	