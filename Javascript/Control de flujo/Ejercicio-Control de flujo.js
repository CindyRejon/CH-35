
//Ejercicio 1
let edad = 20;
if(edad >= 18) {
    console.log("Eres mayor de edad, puedes votar");
}
else  {
    console.log("Eres menor de edad, no puedes votar");
}



//Ejercicio 2

let numero1 = 56;

if (numero1 % 7 === 0 && numero1 % 8 === 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Ejercicio 3
let numeroAleatorio = 2;

if (numeroAleatorio % 4 === 0 || numeroAleatorio % 9 === 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Ejercicio 4
let genero = "drama";
switch (genero) {
    case "accion":
        console.log("Spiderman 2"); break;
    case "drama" : 
        console.log("21 gramos"); break;
    case "comedia" : 
        console.log("Más barato por docena"); break;
    case "romance" : 
        console.log("Moulinge Rouge"); break;
    case "suspenso" : 
        console.log("Tenet"); break;
    case "terror" :
        console.log("Suspiria"); break;
    default:
        console.log("genero desconocido");
        break;
}

//Ejercicio 5
let seleccion = 0;
if (seleccion >= 1)
{
    console.log("1.Retirar dinero");
}
else {
    console.log("No puedes retirar");
}


//Ejercicio 6
let moneda="dolares"
let mxn= 1
switch (moneda) {
    case "dolares":
        console.log(mxn*17.3); break;
    case "euros":
        console.log(mxn*18.68); break;
    case "yenes":
        console.log(mxn*.12); break;
    case "libras":
        console.log(mxn*21.74); break;
    case "franco":
        console.log(mxn*19.77); break; 
        default:
            console.log("No tenemos ese tipo de cambio"); break;}