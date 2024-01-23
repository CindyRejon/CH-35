package org.generation.employee;

/*
 * La estructura básica para crear objetos es la siguiente
 * 1.Atributos o propiedades
 * 2.Método constructor (1 hasta n métodos)
 * 3.Métodos del objeto (comportamiento)
 * 4.Métodos Getters y Setters
 * 5.Método toString
 */
public class Employee {
	//1.Atributos o propiedades
	String nombre;
		String apellido;
	int id;
	double salario;
	String puesto;
	
	//2.Método constructor. Tiene el mismo nombre que la clase, no retorna nada, recibe parámetros (atributos) y los asigna a
	//variables del constructor (this)
	Employee (String nombre, String apellido, int id, double salario, String puesto){
	this.nombre = nombre; 
	this.apellido = apellido;
	this.id = id;
	this.salario = salario;
	this.puesto = puesto;
	
	}
	
	//3.Métodos de comportamiento
	void trabajar() {
		System.out.println("Estoy trabajando");
	}
	void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de $ " + this.salario + " pesos");
	}
	void capacitarse () {
		System.out.println("El trabajador del puesto " + this.puesto + " se capacita");
	}
	void infoGeneral () {
		System.out.println("Id: " + this.id + " Nombre: " + this.nombre + " Apellido: " + this.apellido);
	}


	
	//4.Getters  y Setters.Son metodos que nos permiten obtener o enviar info que está protegida por modificadores de acceso y de esta
	//manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permite enviar la info
	/*void no retorna
	 * /*
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable () {
	 * 			return nombreVariable;
	 * 		}
	 * 		p.e.
	 * 			public String getNombre () {
	 * 				return nombre;	
	 * 			}
	 * Estructura de Setter:
	 * 		public void setNombreVariable (variable) {
	 * 			this.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre (String nombre) {
	 * 				this.nombre = nombre;	
	 * 			}
	 * 
	 * Podemos inicializar Getters y Setter dando click derecho > Source > Generate Getters y Setters > Select All > Generate
	 */
	 
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) { //manda a llamar y no retorna
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	
	
	//5. Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nuestros objetos en formato String.
		//Podemos inicializar toString dar click derecho > Source > Generate toString > Fields > Generate
	
	@Override //metodo que permite mandar a llamar una declaracion como supertipo
	public String toString() {
		return "Employee ["
				+ "nombre=" + nombre + 
				", apellido=" + apellido + 
				", id=" + id + 
				", salario=" + salario + 
				", puesto=" + puesto + 
				"]";
	
	
	
	}
	
}


