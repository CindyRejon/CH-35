package operadoresLogicos;

public class EjerciciosOperadores {

	public static void main(String[] args) {
		
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		
		//&& and
		
        int anios = 5;
		
		boolean esInfante = true; 
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque " + costoInfante);
		
		
		String cliente = "cliente123";
		String credenciales = "nery123";
		
		boolean credencialCorrecta = cliente.equals("cliente123")&& credenciales.equals("nery123");
		System.out.println("Las creden si son validas " + credencialCorrecta);
		/*
		// || or
		double costoPasaje = 380.50;
		int edad = 58;
		boolean credenInapam = false;
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		System.out.println("Tiene descuento " + costoPasaje);
				
		// ! Not
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres;
		
		System.out.println("Tenemos asientos con descuentos " + asientosConDescuento);
		 */
		
		/*Autobús a oaxaca
          costo boleto 350 boleto*
          62 asientos
          4 destinados a adultxs mayores
          6 a estudiantes
          descuento a inapam es de 35%
          estudiantes 30% */
		
		
		int costoBoleto = 350;
		int totalAsientos = 62;
		
		int asientosAdultosMayores= 4;
		int asientosEstudiantes= 6;
		
		double descuentoInapam = 0.35;
		double descuentoEstudiante = 0.30;
		
		if (totalAsientos > asientosAdultosMayores) {
			System.out.println("Asientos Disponibles para Adultos Mayores");}
		
		
		int edad = 60;
        boolean credenInapam = false;
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		if (descuentoAdultoMayor) {
            System.out.println("Tiene descuento. El costo con descuento es: $" + (costoBoleto * (1 - descuentoInapam)));
        } else {
            System.out.println("No tiene descuento. El costo es: $" + costoBoleto);
        }
		
	}

}
