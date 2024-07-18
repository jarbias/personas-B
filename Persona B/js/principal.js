/*Sea el nombre y la edad de varias personas. 
Se necesita un programa que lea estos datos y reporte al final la edad promedio 
y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato*/

import  Programa  from "./Programa.js";
import  Persona  from "./Persona.js";


let programa = new Programa();
let persona = new Persona("Luis", 15, "M");
let persona2 = new Persona("Ana", 19, "F");
let persona3 = new Persona("Jose", 21, "M");
let persona4 = new Persona("Carmen", 17, "F");
let persona5 = new Persona("Rosa", 18, "F");
let persona6 = new Persona("Jose", 22, "M");
let persona7 = new Persona("Maria", 17, "F");
let persona8 = new Persona("Luz", 19, "F");
let persona9 = new Persona("Rafael", 23, "M");
let persona10 = new Persona("Liz", 15, "F");
let persona11 = new Persona("Marcos", 20, "M");
let persona12 = new Persona("Leo", 16, "M");

programa.procesarPersonas(persona);
programa.procesarPersonas(persona2);
programa.procesarPersonas(persona3);
programa.procesarPersonas(persona4);
programa.procesarPersonas(persona5);
programa.procesarPersonas(persona6);
programa.procesarPersonas(persona7);
programa.procesarPersonas(persona8);
programa.procesarPersonas(persona9);
programa.procesarPersonas(persona10);
programa.procesarPersonas(persona11);
programa.procesarPersonas(persona12);

let salida = document.getElementById("salida");
salida.innerHTML += "Resultados:" + "<br>";
salida.innerHTML += "Edad Promedio: " + programa.promedioEd() + "<br>";
salida.innerHTML += "Edad Mayor: " + programa.mayorf() + "<br>";