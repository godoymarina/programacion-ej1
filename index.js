//Cota minima y cota maxima

///comentar- bloque conceptual - buena costumbre-
///Que usamos de variables para agarrar el inferior y superior- van a ser fijos ? lo ideal es que no se toquen 
const cotaMinima = -10;
const cotaMaxima = 10;

//ESTA ES MI ENTRADA 
let userInput = parseInt(prompt(`Por favor ingrese un numero entre ${cotaMinima} y ${cotaMaxima}`));

///PROMPT  devuelve string /// PARSEINT devuelve nro 
// ///Insertar una variable dentro del string- dos formas- 
///CONCATENAR"Por favor ingrese un nro entre "+ cotaMinima + " y + "cotaMxima")); ->es INCOMODO



//Evaluo si esta dentro del rango 
///ES UNA FORMA MUY LARGA - CON REDUNDANCIA- SI REPETIS CODIGO ES PORQ HAY ALGO MEJOR

/*if (userInput >= cotaMinima) {
    //Si esta por arriba de la cota minima, queda evaluar la cota maxima /EVALUO LA COTA MINIMA 
    if (userInput <= cotaMaxima) {
        // Ambas son verdaderas, estan dentro del rango /EVALUO LA COTA MAXIMA
        alert("El numero ingresado no esta dentro del rango"); ///ESTA EN RANGO
    }
}
else {
    //Esta por debajo de la cota minima, no esta en rango
    alert("El numero ingresado no esta dentro del rango");
}
    else {
    //Esta por debajo de la cota minima, no esta en rango
    alert("El numero ingresado no esta dentro del rango");
}

else {
    //Esta por debajo de la cota minima, no esta en rango
    alert("El numero ingresado no esta dentro del rango");
}*/

///TENGO UN CASO DONDE NECESITO QUE SE CUMPLAN DOS CONDICIONES JUNTAS
// -operador AND && -
//cond1&&cond"
//T T = T
//T F = F
//F T = F
//F F = F

//  PRIMERA CONDICION            SEGUNDA CONDICION
if(userInput >= cotaMinima && userInput <= cotaMaxima){
    //Ambas son verdaderas estan dentro del rango
    alert("El numero ingresado esta dentro del rango");
}
else(
    // No esta en el rango 
    alert("El numero ingresado no esta dentro del rango");
)
// lo unico no se distingue cual fue condicion no era verdadero 


// otro OPERADOR es OR q no aplica a este ejercicio
//     || si una es verdadera ya se cumple la condición

//Queda evaluar si es PAR O IMPAR 
// OPERADOR MODULO:  DIVIDIR se evalua el RESTO! 5:2 = 2 ( RESTO 1 IMPAR) 
// DIVIDIRLO POR 2 ME DA 0 DE RESTO ES "PAR" // DIVIDIDO POR DOS ME DA UNO DE RESTO "IMPAR"
// condicion ==== si hay dos tipos de datos que su valor es el mismo y el tipo de dato es el mismo
// 2 == "2" true
// 2 === "2"false
//en este caso no hace falta === porq tengo la tranqilidad que tengo PROMPT  
/*if(userInput %  == 0) {
    alert("El numero ingresado es par");
}
else{
    alert("El numero ingresado es impar");
}*/

// OPERADOR TERNARIO , es un IF compacto (es comun en asignacion de variable)
// cuando hay condiciones anidades ir por IF ELSE- TERNARIO es para condiciones cortas
let msg = (userInput % 2 == 0)? "par" : "impar";
alert (`El numero ingresado es ${msg}`);
