const users = [
    {
        name: "Joseph",
        lastName: "Flores",
        phoneNumber: "9999999",
        address: "Calle falsa 123",
        isDeveloper: true,
        age: 22,
    },
    {
        name: "Juan",
        lastName: "Zapata",
        phoneNumber: "9999999",
        address: " Calle falsa 1234",
        isDeveloper: false,
        age: 21,
    }
];

for (let user in users) {
    console.log(user[0]);
    
}

for (let user of users) {
    console.log(user.name);
}

//DOM
//Document Object Model
const variableH1 = document.querySelector("h1");
variableH1.innerText = "Cambiando el valor del H1 desde JS";
// const h1 = document.querySelector("h1");
console.log(variableH1);
//Podremos camibar el title desde html?
document.title = "Lo hicimos en JS";

//SEPAN QUE TAMBIEN PODEMOS MODIFICAR EL CSS
//La forma en la cual podemos modificar los estilos de nuestra
//pagina es usando style

//!Nota las propiedades son las mismas sin embargo no usan guiones
//!En JS se usa camellCase
document.body.style.background = "#c3c3c3";
document.body.style.fontFamily = "Helvetica";

//! No se recomienda usar CSS dentro de JS
variableH1.style.color = "blue";


