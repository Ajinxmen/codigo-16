//Una funcion es un bloque de codigo que realiza una accion

//La sintaxis de una funcion
function nombreDeLaFuncion() {
    //En este espacio podemos escribir codigo
    const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"]

    for (const alumno of alumnos) {
        console.log(alumno);
    }
}

//! Nota: Para hacer que una funcion se ejecute debemos llamarla
// Esta accion que acabamos de hacer se llama ejecutar a las funcions
nombreDeLaFuncion();

function cuboDeUnNumero() {
    return Math.pow(10, 3);
}

// recuerden que esto es llamar a una funcion
const resultado = cuboDeUnNumero()

console.log("resultado", resultado);
//Ahora haremos que una funcion

//Una funcionalidad es el poder enviar valores a las funciones
//Lo que esta dentro del parentesis en una funcion se llaman parametros
//y podemos enviar n parametros
function cuadradoDeUnNumero(numero, potencia) {
    return Math.pow(numero, potencia);
}

const ejemplo1 = cuadradoDeUnNumero(4, 3);
const ejemplo2 = cuadradoDeUnNumero(6, 2);
console.log(ejemplo1);
console.log(ejemplo2);

//Implementar un algoritmo que reciba 2 argumentos y los sume,
//el resultado se debera imprimir en pantalla

// function sumaDeNumeros(numero1, numero2) {
//     const n1 = Number(numero1);
//     const n2 = Number(numero2);
//     if (isNaN(n1) || isNaN(n2)) {
//         return "No se pueden sumar";
//     }

//     return n1 + n2;
// }

// const ejemplo3 = sumaDeNumeros(10, 20);
// document.write('La suma es: ' + ejemplo3);
// console.log(ejemplo3);

// function calcularFactorial(numero) {

//     //! Nota el return aparte de retornar un valor da fin a la
//     //! ejecucion de la funcion

//     const number = Number(numero);
//     if(isNaN(number)){
//         return "Esto no se puede hacer porque no es un numero";
//     }

//     let resultado = 1;
//     for (let i = 0; i <= numero; i++) {
//         // resultado = resultado * i
//         resultado *= i;
//     }
//     return resultado;
// }

function calcularFactorial(numero) {
    // 4 = 1 x 2 x 3 x 4 = 24
    const number = Number(numero);
  
    //! Nota el return aparte de retornar un valor da fin a la
    //! ejecucion de la funcion
    if (isNaN(number)) {
      return "Esto no se puede hacer porque no es un numero";
    }
  
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
    //   resultado = resultado * i;
      resultado *= i;
    }
  
    return resultado;
  }

// console.log(calcularFactorial(1));
// const ejemplo3 = sumaDeNumeros(5,10);
// console.log(ejemplo3)

// Nota: Otra cosa chevere es que podemos usar una funcion dentro de otra
function imprimirFactorial(){
    const inputValor = document.getElementById("input_number").value;
    const resultado = calcularFactorial(inputValor);

    //Esta linea estamos buscando el HTML a elementos que tenga la clase
    //container cuando lo encuentro lo guarda en la variable container
    //Luego de esto podemos usar la propiedad innerHTML para poder
    //agregar HTML a este container

    //!querySelector Es una funcion de JS la cual permite buscar elementos de una forma
    //!Nota el . , # o el nombre del elemento ejm: ul,div,h4 son selectores de elementos HTML

    //Cuando es un una clase document.querySelector(".container");
    //Cuando es un una id document.querySelector("#container");
    //Cuando es un una elemento document.querySelector("div");

    const container = document.querySelector(".container");
    container.innerHTML += 
    "<p>Factorial de "+inputValor+": "+resultado+"</p>";
    // console.log(inputValor);
}




