//Container
const div_container = document.getElementById('container');

// class Carro{
//     constructor(_color, _velocidad){
//         this.setColor(_color);
//         this.setVelocidad =_velocidad;
//     }

//     presentacion(){
//         const texto = "Hola soy un carro de color "+this.color +" y tengo una velocidad de: "
//         + this.velocidad + "km/h"
//         return texto;
//     }

//       //setter method
//     setColor(_nuevo_color){
//         //El color siempre debe ir en minuscula
//         this.color = String(_nuevo_color).toLowerCase();
//     }

//     setVelocidad(_nuevo_velocidad){
//         //El color siempre debe ir en minuscula
//         this.color = String(_nuevo_color).toLowerCase();
//     }

//     //getters methods:
//     getColor(){
//         return this.color;
//     }

//     //camelCase: palabraunoPalabrados
//     //trainCase: palabrauno-palabrados
//     //snake_case:palabrasuno_palabrados

// }

// class Automovil{
//     constructor(_color,_velocidad){
//         this.color = _color;
//         this.velocidad = _velocidad;
//     }

//     presentacion(){
//         const texto = "Hola soy un auto de color "+this.color +" y tengo una velocidad de: "
//         + this.velocidad + "km/h"
//         return texto;
//     }

// }
// class Cuadrado{

//     constructor(_lado){
//         this.lado = _lado;
//     }

//     get area(){
//         return (this.lado * this.lado) + " m2";
//     }

//     set area(_area){
//         this.lado = Math.sqrt(_area);
//     }
// }

class User {
    //SE LLAMA CON LA PALABRA RESERVADA STATIC
    static cantidad = 0;
    constructor(_id, _first_name, _last_name){
        this.id = _id;
        this.first_name = _first_name;
        this.last_name = _last_name;
        User.cantidad++;
    }

    get fullName(){
        return this.first_name + " " + this.last_name;
    }

    set fullName(_fullname){
        this.first_name = _fullname.split(" ")[0];
        this.last_name = _fullname.split(" ")[1];
    }
}

const u1 = new User(1, "bruno", "diaz")
const u2 = new User(2, "linder", "hass")
const u3 = new User(3, "joseph", "flores")

div_container.innerHTML += "<p>" + u1.fullName + "</p>";
div_container.innerHTML += "<hr>";


div_container.innerHTML += "<p>" + u2.fullName + "</p>";
div_container.innerHTML += "<hr>";

div_container.innerHTML += "<p>" + u3.fullName + "</p>";
div_container.innerHTML += "<hr>";

console.log(u1);
// const c1 = new Cuadrado(4);
// c1.lado = 5;
// div_container.innerHTML += "<p>" + c1.area + "</p>";
// div_container.innerHTML += "<hr>";

// c1.area = 36;

// div_container.innerHTML += "<p>" + c1.lado + "</p>";
// div_container.innerHTML += "<hr>";


// const carro_rojo = new Carro('ROJO', 200);
// const carro_azul = new Carro('AZUL', 50);
// const carro_verde = new Carro('VERDE', 150)



    