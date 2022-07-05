//EVENTOS

//Un evento es una accion que el usuario o el navegador pueden activar
//onclick ->Se activa cuando el usuario usa el mouse y clickea un elemento
//para activar los eventos podemos hacer desde JS o desde el HTML

//onChange
//onkeyup
//onkeydown
//onsubmit
//onfocus
//onblur
//onmouseover
//onmousemove
//onmouseleave

// const btnTest = document.querySelector("#btn-test");

// btnTest.onclick = () =>{
//     console.log("Es un click");
// };

// btnTest.onClick = function (){
//     console.log("Es un click");
// };

// const variableH1 = document.querySelector("#h1-test");
// variableH1.onclick = () => {
//     console.log("click desde el h1");
//     variableH1.innerHTML = "Cambiando el texto";
// }

//Vamos a capturar los datos de nuestro formulario y guardarlo
// en un array de objetos

const users = [];

const form = document.querySelector("#form-store-user");

//vamos agregar el evento onsubmit

//!NOTA el elemento submit tiene una propiedad 
// ! la cual nos da un parametro que esta implicito
// ! este parametro contiene la informacion del evento
// ! y se suele event o e 

form.onsubmit = (event) =>{
//* UN FORMULARIO AL TENER EL EVENTO SUBMIT VA A RECARGAR LA PAGINA
//* PARA EVITAR QUE EL EVENTO ONSBUMIT RECARGUE LA PAGINA, PODEMOS
//* USAR EL evento.preventDefault() ESTA FUNCION BLOQUEA ESA ACCION
//* DE RECARGAR LA PAGINA
    event.preventDefault();
    // console.log(event.target);

    //! LA INFORMACION DE LOS INPUTS DESPUES DE SER OCULTADAS CON EL PREVENTDEFAULT
    //! SIEMPRE ESTARA EN EL TARGET
    
    //* Existe la clase FormData
    //* Instanciar una clase
    const formData = new FormData(event.target);

    //* Creando objeto User
    const user = {};

    for (let dato of formData.entries()) {
        console.log("key",dato[0]);
        console.log("value",dato[1]);
        console.log("----");
        user[dato[0]] = dato[1];
    }

    users.push(user);

};

