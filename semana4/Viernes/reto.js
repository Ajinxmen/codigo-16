function tablaMultiplicacion(numero){
    const number = Number(numero);

    if(isNaN(number)){
        return "Esto no se puede hacer porque no es un numero";
    }

    const inputValor = document.getElementById("input_tabla").value;
    
    let resultado = 1;
    for (let i = 0; i <= 12; i++) {
        resultado = numero * i;
        
    }
    return resultado;
}

function imprimirTabla(){
    const inputValor = document.getElementById("input_tabla").value;
    const resultado = tablaMultiplicacion(inputValor);

    const container = document.querySelector(".container");
    container.innerHTML += 
    "<p> "+inputValor+"x "+resultado+"= "+resultado+"</p>";
}