package org.generation.employee;

public class EmployeeMain {
 public static void main (String[] args) {
	 //Instanciar los objetos
	 Employee Daniel = new Employee("Daniel", "Maldonado", 7836, 8596.33d, "Instructor"); //se le pone d (double) f (float) l (long) por buena practica, pero no se imprime
	 Employee Abigail = new Employee("Abigail", "Martinez", 5274, 19754.20d, "Desarrolladora frontend");
	 Employee Arturo = new Employee("Arturo", "Avila", 4403, 17999.62d, "Desrrollador backend");
 System.out.println(Daniel);
 System.out.println(Abigail);
 System.out.println(Arturo);
 
 //Invocando metodos definidos previamente (trabajar, calcularSalario, capacitarse, infoGeneral)
Daniel.infoGeneral();
Arturo.calcularSalario();
Abigail.capacitarse();

//Utilizar info especifica de cada objeto mediante sus propiedades
//Usando getter, permite traer info
System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto()); //primera forma de obtener info del objeto
//Accediendo a propiedad del objeto
System.out.println(Abigail.puesto + " gana $" + Abigail.salario + " pesos"); //otra manera de obtener info del objeto
 

//Actulizando info mediante Setter, set permite enviar info
 Arturo.setSalario(24598.11); //se puede cambiar el salario sin mencionarlo antes y al imprimirlo se actualiza
 Arturo.calcularSalario();
 }
}
