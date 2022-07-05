// //En las funciones existen parametros con valores predefinidos

// //Cuando llamamos a la funcion restar es obligatorio pasar los 2 parametros
// //Existe una forma en la cual podemos decir que un parametrio tiene un valor
// //por defecto

// function restar(numero1, numero2 = 5){
//     return numero1-numero2;
// }

// //En el caso que a la funcion restar solo le pasen el numero 1 esta de forma
// //automatica asumira que numero 2 vale 5

// console.log("Resta1: ", restar(6)); // 1 porque asume que vale 5 el num2

// //Funciones anonimas
// //Son funciones sin nombre
// //A nivel de JS esto no es el nombre de la funcion
// //! Es considerado como una variable que guarda una funcion
// //! Demostrando que una variable JS puede almacenar funciones

// //! Nota el funcionamiento es igual
// //! Lo que cambiar la forma en la cual se escribe
// //! ademas cuando funciones anonimas no tenemos acceso a this
// //! this Es una forma en la cual podemos acceder a variable usando clases

// //! LO QUE SE UTILIZA ACTUALMENTE SON ARROWS FUNCTIONS
// //! EN EL CASO DE LAS FUNCIONES FELCHA NO HACE FALTA ESCRIBIR LA PALABRA
// //! FUNCTION ESTA IMPLICITA
// //! UN ARROW FUNCTION ES CONSIDERADO UNA FUNCION ANONIMA
// //! POR ENDE TAMPOCO TIENE ACCESO AL THIS


// const multiplicar = function(n1,n2){
//     return n1 * n2;
// }

// console.log(multiplicar(5,6));

// const dividir = (n1,n2) => {
//     return validarSiEsNumero(n1) || validarSiEsNumero(n2) ? "Error numero no valido":n1/n2;
// }

// //Esto no excluye a que podamos cambiar funcion

// function validarSiEsNumero(numero){
//     return isNaN(numero);
// }

// console.log(dividir(2,"b"));

function validarSiEsNumero(){
    return !isNaN(numero);
}

//De forma global vamos a crear un array de alumnos
//Esto es un array vacio

const alumnos = [];


const imprimirAlumnos = () => {
    const inputNombre = document.querySelector("#input_name");
    const nombre = inputNombre.value;

    //Agregando alumnos al array
    alumnos.push(nombre);
    inputNombre.value = "";
    const resultado = document.querySelector(".resultado");
//Siempre debemos limpiar el espacio del resultado antes del for
    resultado.innerHTML = "";
    for(let alumno of alumnos){
        resultado.innerHTML += "<p>"+alumno+"</p>"
    }

}

// function imprimirAlumnos(){
//     const inputNombre = document.querySelector("#input_name");
//     const nombre = inputNombre.value;

//     //Agregando alumnos al array
//     alumnos.push(nombre);
//     inputNombre.value = "";
//     const resultado = document.querySelector(".resultado");
//     resultado.innerHTML = "";
//     for(let alumno of alumnos){
//         resultado.innerHTML += "<p>"+alumno+"</p>"
//     }

// }