/*Ejercicio 1

const edadusuario=parseInt(prompt("¿Cuál es su edad?"));
    if(edadusuario >=18){
        alert("Eres mayor de edad");
} else{
       alert("Eres menor de edad");
}*/

/* Ejercicio 2

let nota1=parseFloat(prompt("Escriba su primera calificación (de 1 a 10)"));
let nota2=parseFloat(prompt("Escriba su segunda calificación (de 1 a 10)"));
let nota3=parseFloat(prompt("Escriba su tercera calificación (de 1 a 10)"));

let promedio=parseInt(nota1+nota2+nota3)/3

    if (promedio > 6) {
        alert("El estudiante aprobó el curso con un promedio de:" +promedio)
    } else {
        alert("El estudiante no aprobó el curso con un promedio de:" +promedio)
    }*/

  /* Ejercicio 3

let num1=parseFloat(prompt("Escriba un número del 1 al 100"));
let num2=parseFloat(prompt("Escriba un número del 1 al 100"));

    if (num1 > num2) {
     alert ("El número " + num1 +" es mayor que " +num2);
   } else if (num1 < num2) {
     alert ("El número " +num1+ " es menor que " +num2);
  } else {
   alert ("El número " +num1+ " es igual que " +num2);
   } */

/* Ejercicio 4

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

var ascendentes = [numero1, numero2].sort(function(a, b) {
 return a - b;
});
alert ("Los números en forma ascendente son: " + ascendentes.join(", ")); */

/* Ejercicio 5

let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

    if (peso < 40) {
  alert ("Persona baja de peso");
    } else if (peso >= 41 + peso <= 70) {
    alert("La persona tiene peso promedio");
    } else if (peso > 71) {
    alert ("La persona tiene sobrepeso");
}*/

/* Ejercicio 6

var numero = parseInt(prompt("Ingrese un número entre 1 y 7:"));

    switch (numero) {
        case 1:
    alert("Día 1 - lunes");
    break;
        case 2:
    alert("Día 2 - martes");
    break;
        case 3:
    alert("Día 3 - miércoles");
    break;
        case 4:
    alert("Día 4 - jueves");
    break;
        case 5:
    alert("Día 5 - viernes");
    break;
        case 6:
    alert("Día 6 - sábado");
    break;
        case 7:
    alert("Día 7 - domingo");
    break;
  default:
    alert("ESCRIBIÓ UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7");
    break;
} */

/* Ejercicio 7

var Total = parseFloat(prompt("Ingrese el precio total de su compra:"));

var descuento;
    if (Total >= 1000) {
  descuento = Total * 0.2;
} else {
  descuento = Total * 0.05;
}

var pago = Total - descuento;
alert("La cantidad a pagar es: " + pago.toFixed(2) + " pesos."); */

/* Ejercicio 8

var horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

var salario;
    if (horas <= 40) {
  salario = horas * 16000;
} else {
  salario = horas * 20000;
}

alert("Su salario semanal es de: " + salario.toFixed(2) + " pesos."); */

/* Ejercicio 9

var nombre1 = prompt("Escriba el nombre de la primera persona:");
var edad1 = parseInt(prompt("Escriba la edad de la primera persona:"));

var nombre2 = prompt("Escriba el nombre de la segunda persona:");
var edad2 = parseInt(prompt("Escriba la edad de la segunda persona:"));

var mayor;
if (edad1 > edad2) {
  mayor = nombre1;
} else if (edad2 > edad1) {
  mayor = nombre2;
} else {
  mayor = "Ambas personas tienen la misma edad"; 
} 

alert("La persona mayor es: " + mayor); */

/* Ejercicio 10

var cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas compradas:"));
var precioCamisa = parseFloat(prompt("Ingrese el precio de cada camisa:"));
var totalSinDescuento = cantidadCamisas * precioCamisa;

var descuento;
    if (cantidadCamisas >= 3) {
  descuento = totalSinDescuento * 0.2;
} else {
  descuento = totalSinDescuento * 0.1;
}

var totalConDescuento = totalSinDescuento - descuento;

alert("El total a pagar por la compra de camisas es: " + totalConDescuento.toFixed(2) + " pesos."); */

/* Ejercicio 11

var numero1 = parseFloat(prompt("Escriba el primer número:"));
var numero2 = parseFloat(prompt("Escriba el segundo número:"));

if (numero1 === numero2) {
  var resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
} else if (numero1 > numero2) {
  var resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
} else {
  var resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
} */

/* Ejercico 12

let opcion=prompt("1.suma 2.resta 3.division 4.multiplicacion");
let numero1=prompt("Digite el primer número")
let numero2=prompt("Digite el segundo número")

    if(opcion==1){
        suma=parseInt(numero1)+parseInt(numero2)
        alert("La suma es: "+suma);
    } else if(opcion==2){
        resta=parseInt(numero1)-parseInt(numero2)
        alert("La resta es: "+resta);
    } else if(opcion==3){
        division=parseInt(numero1)/parseInt(numero2)
        alert("La division es: "+division);
    } else {
        multiplicacion=parseInt(numero1)*parseInt(numero2)
        alert("La multiplicacion es: "+multiplicacion);
    } */