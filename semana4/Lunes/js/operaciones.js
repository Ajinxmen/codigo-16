let numero1 = 10;
let numero2 = 20;

// Para Suma 2 numbers usamos el +
console.log("Suma", numero1 + numero2)
// Para Resta 2 numbers usamos el -
console.log("Resta", numero1 - numero2)
// Para Multiplicacion 2 numbers usamos el *
console.log("Multiplicacion", numero1 * numero2)
// Para numbers 2 numbers usamos el /
console.log("Divison", numero1 / numero2)

//Transformar Numer to String
let numero3 = "23";
console.log(Number(numero3));

let numero4 = "Luis";
//Cuando no es posible transformar un dato a number
//El resultado sera un NaN
console.log(Number(numero4));

//En un registro solicitamos la edad
//veintidos
console.log(Number("veinti dos"));
console.log("one");

//Formas de transformar string - number
let numero5 = "33.5"
//Forma 1
console.log("Forma1", Number(numero5));
//Forma 2
console.log("Forma2", parseInt(numero5));
//Forma 3
console.log("Forma3", numero5);
//Forma 4
console.log("Forma4", parseFloat(numero5));

//
console.log("Probando un caso", Number("12hola"));
console.log(Number("12hola"));

//Math
const operacion = 3 * 2 + 10 - 5 / 2;
console.log(Math.sqrt(operacion)); 

//!Nota todo valor recibido en el prompt es un string
// const catetoA = Number(prompt("Ingrese el valor de A"))
// const catetoB = Number(prompt("Ingrese el valor de B"))

// const operacion2 = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB, 2));
// console.log("La hipotenusa es", operacion2)

//Problema
//Hacer un algoritmo que halle el area de un rectangulo

const base = Number(prompt("Ingrese el valor de la base: "));
const altura = Number(prompt("Ingrese el valor de la altura: "));

let areaRectangulo = base * altura;
console.log("Area del Rectangulo: "+areaRectangulo);

//Problema 2
//Hallar el alrea de un circulo

const PI = 3.1416;
const radio = Number(prompt("Ingrese el valor de la radio: "));

let areaCirculo = Math.pow(radio, 2)*PI;
console.log("Area del Circulo: " +areaCirculo);






