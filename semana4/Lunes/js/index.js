//variable que pueda cambiar el tipo
let numero = 10;
console.log("Primer tipo", numero);

//podemos cambiar el tipo de dato
//cuando alteramos el valor de una variable hace falta poner let o const?
//let o const va solo cuando se crea la variable
numero = "Pepe";
console.log("Segundo tipo", numero);

//vamos a ver el console.log()
//permite imprimir un valor en la consola del navegador
// console.log(numero);

//! Const
const igv = 0.18;
console.log("Primer igv", igv)

//! No se puede cambiar el valor del igv sobreescribiendolo
// Existe otra forma de poder mostrar una variable
// alert: dispara una alerta en nuestro navegador
// alert(igv);

// Concatenacion: Basicamente 

const primerNombre = "Linder";
const primerApellido = "Hassinger";
let edad = 22;
let dias = 20;
let estaVivo = true;


//Para poder concatenar 2 o mas string usamos el operador +
console.log("Concatenacion");
console.log(primerNombre +" "+ primerApellido +" "+edad);
console.log(edad + dias)

//Habra alguna forma de convertir un number en un string
// 2220

//Sepamos que en JS existen String y Number
//Al hacer esto estamos transformando un entero a un string
console.log(String(dias)+String(edad))
console.log("Bool", estaVivo);
console.log("String", String(estaVivo));
