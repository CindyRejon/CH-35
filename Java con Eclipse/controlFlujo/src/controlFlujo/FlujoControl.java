package controlFlujo;
import java.util.Scanner;

public class FlujoControl {

	public static void main(String[] args) { //debe coincidir la clase con el nombre del documento/proyecto		
		//recuerda que para que algo se ejecute, siempre debe de ir en el método principal 
	
		//Recuerda que para que algo se ejecute, siiempre debe de ir en el metodo principal
		
		
				//Primero defino una variable del tipo String donde se almacena un dato
				 // Dejo en null y despues agrego fecha 
				// Variable declarada e inicializada, en null a proposito, para tener un "espacio" de memoria ya asignado, y solo reemplazarlo con un nuevo dato
				
				//Para validar si podemos viajar en cierta fecha
				/*
				String viaje = "16-01-2024";
				
				if (viaje != null) { //variable vacia
					System.out.println("Ya no tenemos fechas disponibles, una disculpa.");
					
				} else {
					System.out.println("Puede reservar su viaje");
				} */
			
		/*
		//Validacion de contraseña
				Scanner scanner = new Scanner(System.in);

		        // Solicitar la primera contraseña
		        System.out.print("Ingrese la contraseña: ");
		        String contraseña1 = scanner.nextLine();

		        // Solicitar la segunda contraseña
		        System.out.print("Ingrese la contraseña nuevamente: ");
		        String contraseña2 = scanner.nextLine();

		        // Verificar si las contraseñas coinciden
		        if (contraseña1.equals(contraseña2)) {
		            System.out.println("Las contraseñas coinciden. Acceso permitido.");
		        } else {
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		        }

		        // Cerrar el scanner
		        scanner.close();
		*/
			////////////////////////////
		        //switch: para seleccionar comida de la dulceria del cine
		        
		/*     
		//Seleccion de opciones, variable que almacena dicha opcion 
		        int menu = 6;
		        //Crear menu
		        System.out.println("Bienvenido a la dulcería");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hot Dog");
		        System.out.println("5. Pagar");
		      System.out.println("No contamos con eso en nuestro menú, selecciona una opción válida (1-5)."); */
		        
		
		/*
		        switch (menu) {
		        case 1:
		        	 System.out.println("Usted ha agreado Palomitas");
		        	 //Aqui agregamos una opcion y mensaje
		        	 break;
		        case 2:
		        	System.out.println("Usted ha agregado Refresco");
		        	break;
		        case 3:
		        	System.out.println("Usted ha agregado Nachos");
		        	break;
		        case 4:
		        	System.out.println("Usted ha agregado Hot dog");
		        	break;
		        case 5:
		        	System.out.println("Usted ha seleccionado Pagar su combo");
		        	break;
		        	
		        	default:
		        	System.out.println("No contamos con esa opción, lo invitamos a seleccionar una opción válida");
			        break;
		      } */
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingresa una opción: ");
		int cartelera = scanner.nextInt();

		System.out.println("Disfruta la magia del cine");
        System.out.println("1. Amelie");
        System.out.println("2. Moulin rouge");
        System.out.println("3. 2001: Odisea en el espacio");
        System.out.println("4. Metrópolis");
        System.out.println("5. Comprar boleto");
        /*
      System.out.println("Por el momento no está disponible, consulta los siguientes estrenos");
      */
      switch (cartelera) {
      case 1:
      	 System.out.println("Usted ha seleccionado Amelie");
      	 //Aqui agregamos una opcion y mensaje
      	 break;
      case 2:
      	System.out.println("Usted ha seleccionado Moulin rouge");
      	break;
      case 3:
      	System.out.println("Usted ha seleccionado 2001: Odisea en el espacio");
      	break;
      case 4:
      	System.out.println("Usted ha seleccionado Metrópolis");
      	break;
      case 5:
      	System.out.println("Usted ha seleccionado Comprar boleto");
      	break;
      	
      	default:
      	System.out.println("Por el momento no está disponible, consulta los siguientes estrenos");
	        break;
      }
      
	}//main 

}//clase
