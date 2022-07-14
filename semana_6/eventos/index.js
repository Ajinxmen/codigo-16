const inputPassword = document.querySelector("#input-password");
const checkBoxShowPassword = document.querySelector("#checkbox-show");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const textError = document.querySelector(".text-error");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const inputEmail = document.querySelector("#input-email");
const correoError = document.querySelector(".correo-error");

checkBoxShowPassword.onchange = function () {
    // if(this.checked){
    //     inputPassword.type = "text"
    // }else{
    //     inputPassword.type = "password"
    // }

    //Aplicando operador ternario forma 1:
    // inputPassword.type = this.checked?"text":"password";

    //Aplicando operador ternario forma 2:
    this.checked ? inputPassword.type = "text" : inputPassword.type = "password";

}

//Cuando hablamos de eventos de teclado
// * onkeydown => Es el primer evento que se ejecuta al presionar la tecla
// * onkeypress => Es el evento que se ejecuta mientras se presiona la tecla
// * onkeyup => Es el ultimo evento que se ejecuta cuando se levanta la tecla

inputPasswordConfirm.onkeyup = function () {
    //? paso 1: Validar que el password tenga contenido
    //? si el password esta vacio, votar alerta e indicar que debe tener contenido
    //? este input
    const password = inputPassword.value;
    const confirmPassword = this.value;
    if (password === "") {
        alert("Debe completar el password para poder escribir en el input");
        this.value = "";
        inputPassword.focus();
        return;
    }

    //? Paso 2: Verficiar que el texto sea igual al del input password
    if (password !== confirmPassword) {
        //debemos mostrar un error
        console.log("Los password no son iguales");
        textError.style.display = "block";
    } else {
        textError.style.display = "none";
        console.log("Los password son iguales");

    }

};

inputPhoneNumber.onkeyup = function () {
    const valor = this.value;
    //? Podemos convertir el texto a un array y evaluar si alguno de ellos es string
    //? Si es asi eliminarlo del array y luego convertir ese array a string
    //? que sea el value del input
    const caracteres = valor.split("");
    console.log(caracteres);
    //isNan: is not a number
    let newValue = "";
    
    caracteres.forEach((caracter)=> {
        // Si es un numero entonces agregalo a newValue
        if(!isNaN(Number(caracter))){
            newValue += caracter;
        }
    });
    //Luego de iterar el array y verificar que solo agregue los numeros
    // a la variable newValue decimos que el valor del input sera newValue
    this.value = newValue;
    
  }

  inputEmail.onkeyup = function () {
    const value = this.value;

    //que funcion usamos para buscar en un texto
    //includes: Nos permite buscar un valor dentro de un texto o array
    if(value.includes("@")){
        //Hara una forma de separar el texto y convertirlo en array
        const valueAfterAt = this.value.split("@")[1];
        const valueSeparate = valueAfterAt.split("");
        //Entonces debemos validar que la primera y la ultima posicion no sean puntos
        // o caracteres extraños


        console.log(valueSeparate);
    }else{
        console.log("correo no valido");
    }
  }


inputEmail.onkeyup = function () {
  const value = this.value;

  const regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;

    regex.test(this.value)
    ?(correoError.style.display = "none")
    :(correoError.style.display="block");
  }
//   console.log(regex.test(value));
  // Reto
  //Si regex es falso muestren un mensaje de error
  // Si es verdade no muestren nada

    // inputPhoneNumber.onkeyup = function () {
    //     this.value = this.value
    //         .split("")
    //         .filter((caracter) => !isNaN(Number(caracter)))
    //         .join("");
    // }