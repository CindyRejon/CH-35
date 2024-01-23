package org.generation.collections;
import java.util.Arrays;
import java.util.HashSet;


public class HashSetCollection {

	public static void main(String[] args) {
		//HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos
	HashSet<String> animals = new HashSet<String>();
	
    animals.add("Perro");
    animals.add("Gato");
    animals.add("Caballo");
    animals.add("Oveja");
    animals.add("Panda");
    animals.add("Mapache");
    animals.add("Jirafa");
    animals.add("Jirafa");
    animals.add("Jirafa");
    animals.add("Jirafa");
    
    
    //Imprimir el HashSet
    System.out.println(animals);
    
    
    //Conocer si un elemento se encuentra dentro del Set: contains();
    System.out.println(animals.contains("Oveja"));
    
    
    //Eliminar un elemento: remove();
    animals.remove("Mapache"); //Elimino
    System.out.println(animals);//Imprimo el Set sin el elemento eliminado
    
    
    //Agregando elementos en una sola linea
    animals.addAll(Arrays.asList("Perrito", "Gatito", "Osito"));
    System.out.println(animals);
    
    /**
     * La clase HashSet no va a garantizar que los elementos se muestren segun el orden establecido
     * ya que busca eficientar la busqueda y recuperacion de los elementos. Utiliza tablas hash
     * para almacenar los elementos y mostrarlos al usuario 
     */
    
    //Limpiar el HashSet: .clear();
    animals.clear();
    System.out.println(animals);
  
	}
}
