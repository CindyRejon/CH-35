package org.generation.collections;

import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//****Arrays****// Usan corchetes [] y el array es de tipo string que se llama name y contiene todo dentro de = {}
		
        String [] names = {"Jonathan", "Marco", "Rocio", "Lizbeth", "Arturo"};
        //Imprimiendo Arrays, para que imprima cada elemento se convierta en array de tipo string, se pone Arrays.toString
        System.out.println(Arrays.toString(names));
        
        int [] edades = {12, 3, 25, 55 , 69};
        System.out.println(Arrays.toString(edades));
        
        //Acceder a cada elemento del array
        String name1 = names[0];
        System.out.println("El primer nombre de la lista es " + name1);
        int edad1 = edades[2];
        System.out.println("La edad de " + name1 + " es de " + edad1 + " años"); //La edad de Jonathan es de 25 años
        
        //Obtener la longitud del Array
        int longitudNames = names.length;
        System.out.println("El Array names tiene " + longitudNames + " elementos");
        
        //Obtener el ultimo elemento
        //String ultimoElemento = names[longitudNames - 1]; //la longitud ya vive en la variable longitudNames
        String ultimoElemento = names[names.length -1]; //La longitud No vive en una variable
        System.out.println("El ultimo elemento del Array names es " + ultimoElemento); //Arturo
        
        //Mostrar cada elemento utilizando forEach
        for (String nombre : names) { //llave nombre names para que imprima cada elemento, puede cambiar el nombre de name porque ya se definio arriba en linea 10
        	 System.out.println(nombre);
        }
        
        //***Array List***
        //ArrayList es un array que puede cambiar de tamaño. Es una clase de Java que representa la estructura de datos de
        //Arrays. Permite elementos duplibcados y recibe varos metodos para su manipulacion 
        ArrayList<String> films = new ArrayList<String>(); //array de tipo string
        
       ArrayList<Integer> matricula = new ArrayList<>();  //array de tipo entero. Wrapper class, se mandan a llamar datos superiores que es wrapper
       ArrayList<Character> characters = new ArrayList<>();
       
       //Agregar elementos
       films.add("Amelie");
       films.add("El Gran Pez");  
       films.add("Quiereme si te atreves");
       films.add("Odisea en el espacio");
       System.out.println(films); //en lista no hay que convertir nada, solo lo imprime
       
       //Obtener un elemento : name.get(index);
       String film1 = films.get(0);
       System.out.println("La primer película es " + film1);
       
       //Modificar un elemento: name.set(index.newValue)
       String film3 = films.set(3, "Memento");
       String film3Get = films.get(3); //get permite traer elemento
       System.out.println(film3Get);
       
       //Conocer el tamaño del ArrayList: name.size();
       int sizeFilms = films.size();
       System.out.println("El tamaño del ArrayList es de " + sizeFilms + " elementos");
       
       
       //Agregar un elemento y después eliminarlo: name.remove (index);
       films.add("The fountain");
       System.out.println(films);
       
       films.remove(3);
       System.out.println(films);
       
       
       //Mostrando los elementos del ArrayList en lista
       System.out.println("*** Films en la lista ***");
       for (String pelicula: films) {
    	   System.out.println(pelicula);
    	     }
       
       
       matricula.add(25430);
       
       characters.add('A');
       
       System.out.println(matricula);
       System.out.println(characters);
	}
}
