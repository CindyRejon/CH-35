package org.generation.collections;
import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		//El metodo .sort() permite ordenar los elementos de un ArrayList 
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();

		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(7);
		points.add(8);
		
		System.out.println(points);//No se encuentran ordenados de menor a mayor, solamente como los agregue en el ArrayList
		
//Ordenamiento de menor a mayor utilizando sort
		Collections.sort(points);
		System.out.println(points); //Ordenados de menor a mayor
		
		names.add("Cindy");
		names.add("Rocío");
		names.add("Arturo");
		names.add("Eveida");
		names.add("fernanda");
		names.add("angel");
	
		System.out.println(names);//Ordenamiento como se agregaron
		
		//Ordenamiento de menor a mayor utilizando sort
		Collections.sort(names);
		System.out.println(names); //Toma en cuenta el ordamiento con base en la tabla ASCII, pone de último las minusculas
		
	}


}
