package tiposdeDatosyVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
		
		
		System.out.print("Hola Mundo");
	
		/*Comentarios
		 * multilinea*/
		
		//comentarios de una sola linea 
		
		//Tipos de datos enteros
		
		byte edad = 15;//Sirve para representar un numero entero 8bits (-128 al 127)
		
		System.out.println("Edad del participante"+edad);
		
		short usuariosNuevos = 200;//Sirve para representar un numero entero 16 bits (-23768 al 32767)
		
		System.out.println("Usuarixs nuevos" +usuariosNuevos);
		
		int usuariosTotales = 8752;// sirve para representar un numero entero 32 bits (-2147483648 al 2147483647)
		
		System.out.println("Usuarios Totales "+usuariosTotales);
		
		long usuariosPremium = 9512; //Sirve para representar un numero entero con valores mucho mayores 
		
		System.out.println("Usuarios premium"+usuariosPremium);
		//Tipos de datos con numero decimales 
		
				float altura = 1.61f;//Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
				
				System.out.println("Altura del usuarix "+altura);
				
				double peso = 68.200;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
	
				String costoBoleto = "500"; //Es una clase para tener cadenas de texto
				String zonaBoleto = "52";
				System.out.println("Usuarix "+costoBoleto);
				System.out.println("Zona a la que pertenece "+zonaBoleto);
				
				
				char seccion = 'f'; //Sirve para representar valores con un solo caracter
				System.out.println("Seccion "+seccion);
				
				boolean clienteFrecuente = true; //Sirve para obtener un true o false utilizando condicionales
				System.out.println("Es un cliente frecuente "+clienteFrecuente);
				
				//Conversion de tipos
				//Casteo a entero
				int pesoDiferente = (int) peso;
				//casteo entero
			    long pesoCambio1 = (long) peso;
			    
				System.out.println("double"+peso);
				System.out.println("int "+pesoDiferente);
				System.out.println("long "+pesoCambio1); 
				
				
				int nombreCambio = Integer.parseInt(costoBoleto);
				double zonaCambio = Double.parseDouble(zonaBoleto);
				
				System.out.println("Zona del usuarix segun su boleto"+(nombreCambio * zonaCambio));
	
	/*Operadores aritmeticos
	 +suma
	 -resta
	 *mutiplicacion
	 /division
	 % Residuo
	 
	 Operadores de comparacion
	 == compara si un operador es igual a otro
	 != compara si es diferente
	 < mayor que
	 > menor que
	 <= mayor o igual que
	 >= menor o igual que
	 */
				
	//programa para un cine
				
	
				
	/*10 Salas
	50 asientos 
	Precio Entrada = $75.50
	Precio Palomitas = $89.70
    Bebida = $35.5*/
				
		double precioEntrada = 75.50;
		double precioPalomitas = 89.70;
		double precioBebidas= 35.50;
		
		int capacidadTotal = 500;
				
		
		int personasDentro = 342;
		
		if (personasDentro > capacidadTotal) {
			System.out.println("Aforo lleno");}
			
			double totalEntrada = personasDentro * precioEntrada;
			double totalPalomitas = personasDentro * precioPalomitas;
			double totalBebidas = personasDentro * precioBebidas;
			
			System.out.println("Total de personas " + personasDentro);
			System.out.println("Total de entradas " + totalEntrada);
			System.out.println("Total de palomitas " + totalPalomitas);
			System.out.println("Total de bebidas " + totalBebidas);
		
	}

}