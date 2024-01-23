package org.generation.letras;
/*Crear un programa que se solicite un mensaje al usuario y cuente cuántas vocales, consonantes,números y carácteres posee dicho mensaje
 * 		Letras: métodos para interactuar con el usuario
 * 		LetrasMain: Vamos a instanciar los objetos
 * 		Contador: métodos para contar vocales, consonantes,número y símbolos*/

/*Necesitamos establecer dos grupos de métodos:
 * Grupo1: métodos booleanos para determinarn a que tipo de caracteres corresponde
 * Grupo2: Métodos que van a devolver el conteo de dichos caracteres*/
public class Contador{
	//Grupo 1
	public boolean esVocal(char caracter) {
		return(caracter =='a' || caracter =='e' || caracter =='i' || caracter =='o' || caracter =='u' || 
				caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U');
	}
	public boolean esNumero(char caracter) {
		//casting para poder utiliza la tabla ASCII (48-57), toma el caracter a y lo traduce a ASCII
		short codigoAscii = (short)caracter;
		return codigoAscii > 48 && codigoAscii < 57;
	}
	
	public boolean esConsonante(char caracter) {
		//casting para poder utilizr la tabal ASCII (65-90 Y 97-122), con excepción de vocales (!)
		short codigoAscii = (short)caracter;
		return ((codigoAscii > 65 && codigoAscii < 90) || (codigoAscii > 97 && codigoAscii < 122)) && !esVocal(caracter);
	}
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esNumero(caracter) || esConsonante(caracter));
		}
	
	//Grupo 2
	//Método para contar vocales
	public int contarVocales(String palabra) {
		int vocales = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esVocal(caracter)) {
				vocales++;
			}
		}
		return vocales;
	}
	
	//Método para contar números
	public int contarNumeros(String palabra) {
		int numeros = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esNumero(caracter)) {
				numeros++;
			}
		}
		return numeros;
	}
	
	//Método para contar consonantes
	public int contarConsonantes(String palabra) {
		int consonantes = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esConsonante(caracter)) {
				consonantes++;
			}
		}
		return consonantes;
	}
	
	//Método para contar símbolos
	public int contarSimbolos(String palabra) {
		int simbolos = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esSimbolo(caracter)) {
				simbolos++;
			}
		}
		return simbolos;
	}

}
