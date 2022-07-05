//Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
// Funcion que reciba 4 parametros valide si son numeros y si todo esta ok que 
// retorne el promedio
// los valores pueden por inputs o por prompt

// const notas = [];
const promedioNotas = () =>{
    const inputNota1 = document.querySelector("#input_nota1");
    const inputNota2 = document.querySelector("#input_nota2");
    const inputNota3 = document.querySelector("#input_nota3");
    const inputNota4 = document.querySelector("#input_nota4");

    const nota1 = inputNota1.value;
    const nota2 = inputNota2.value;
    const nota3 = inputNota3.value;
    const nota4 = inputNota4.value;
    const promedio = (nota1+nota2+nota3+nota4)/4;
    //Agregando notas al array
    // notas.push(notas);
    
    inputNota1.value = "";
    inputNota2.value = "";
    inputNota3.value = "";
    inputNota4.value = "";
    // resultado.innerHTML = "";
    
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML += "<p>"+ promedio +"</p>";

}