const clothes = [
    {
        brand: "Mango",
        type: "Shirt",
        price: 200,
        store: "Falabella",
        rating: 4.3,
        features: {
            color: "green",
            size: "small",
        },
    },
    {
        brand: "Zara",
        type: "Pants",
        price: 150,
        store: "Falabella",
        rating: 6.5,
        features: {
            color: "black",
            size: "32",
        },
    },
    {
        brand: "Tommy",
        type: "T-shirt",
        price: 350,
        store: "Tommy",
        rating: 5,
        features: {
            color: "blue",
            size: "L",
        },
    }
];

//Filter es el hermano de map
//porque filter tambien retorna un array de elementos
// sin embargo filter sirve para poder crear filtro en base a una condicion
//queremos solo los productos que tenga como precio > 100
//Si el elemento es mayor a 100 guardalo en la variable filtro

const filtro1 = clothes.filter((clothe) => clothe.price > 150);
// por ende filtro sera un array con 2 elementos
console.log("filtro 1",filtro1);

const filtro2 = clothes.filter(
    (clothe) => clothe.price > 200 && clothe.rating > 4
    );
    
console.log("filtro 2",filtro2);

//filtro usando map
const filtro3 = clothes.map((clothe) => {
    if(clothe.price > 150 && clothe.rating > 4){
        return clothe;
    }
});

console.log("filtro3",filtro3);


//vamos a buscar en el array de objetos las prendas que contengas la palabra shirt
//En la condicion clothe.type.includes("shirt")
//quiero que en el string clothe.type busques si "shirt" existe
//un truco para evitarnos el tema de las mayusculas o minusculas
//es convertir el texto a mayusculas o minusculas
//T-shirt => t-shirt
//pants => pants
//Shirt => shirt

const filtroShirt = clothes.filter((clothe)=> 
    clothe.type.toLocaleLowerCase().includes("shirt")
    );

//includes basicamente sirve para buscar algo en un texto
// ejemplo

const frase = "HolameLlamocarlos";
//basciamente include recibe un parametro string y lo busca en el texto
console.log(frase.toLocaleLowerCase().includes("llamo"));

//Find

const numbers = [10,20,30,40,50];
const numerosMayoresFilt = numbers.filter((number) => number > 30);
const numerosMayores = numbers.find((number) => number > 30);
console.log(numerosMayoresFilt);
console.log(numerosMayores);

// Ejemplo2

const cars = [
    {
        model: "GLA 200",
        price: 34000,
        brand: "Mercedez",
    },
    {
        model: "A 200",
        price: 14000,
        brand: "Mercedez",
    },
    {
        model: "X6",
        price: 34000,
        brand: "BMW",
    },
];

//QUEREMOS EL PRIMERO DE LA LISt QUE SEA MARCA MERCEDEZ
const filtroMercedez = cars.find((car)=> car.brand === "Mercedez");
console.log("filtroMercedez", filtroMercedez.model);

//TIENE SU HERMANO LLAMADO FINDINDEX
// Es lo mismo que find sin embarggo lo que retorna es el indice
const filtroIndice = cars.findIndex((car)=> car.brand === "Mercedez");
const filtroBMW = cars.findIndex((car)=> car.brand === "BMW");
console.log("filtroIndice", filtroIndice);
console.log("filtroBMW", filtroBMW);











// const edades = [23, 21, 34, 45, 28, 30];

// En arrow functions inline, el return esta implicito
// console.log("ELEVANDO CON MAP");
// const edadesAlCuadrado = edades.map(edad => Math.pow(edad, 2));
// console.log(edadesAlCuadrado);
// console.log("---------------");

//Crear array de edades
//usando for o forEach hagan que una variable guarde le cuadrado
//de las edades

// const arrayEdades = [];
// for (let i = 0; i < edades.length; i++) {
//     arrayEdades[i] = Math.pow(edades[i], 2);
// }
// console.log("ELEVANDO Y GUARDANDO EN ARREGLO ARRAYEDADES")
// console.log(arrayEdades)
// console.log("---------------");

// console.log("FOREACH")
// const nuevasEdades = [];
// edades.forEach((edad) => nuevasEdades.push(Math.pow(edad, 2)));
// console.log("nuevasEdades", nuevasEdades);

// const numeros = [10,20,30,40,50];

// // for (let i = 0; i < numeros.length; i++) {
// //     numeros[i] = Math.pow(numeros[i],2);
// //     console.log(numeros[i]);
// // }

// const numerosAlCuadrado = () =>{
//     for (let i = 0; i < numeros.length; i++) {
//         numeros[i] = Math.pow(numeros[i],2);
//         console.log(numeros[i]);
//     }
// }



























// //forEach

// //Recuerden que el return no existe en el forEach
// //La alternativa con return se llama map
// const products = [
//     {
//         name: "HP",
//         price: 1300,
//         brand: "HP",
//     },
//     {
//         name: "Laptop Gamer",
//         price: 2100,
//         brand: "Lenovo",
//     },
//     {
//         name: "Laptop/tablet",
//         price: 1000,
//         brand: "Asus",
//     },
//     {
//         name: "Laptop Alienware",
//         price: 5300,
//         brand: "MSI",
//     },
// ];

// const productsIterForEach = products.forEach((product) => {
//     //Recuerden el product es cada elemento de mi array
//     console.log(product.name);
// });

// console.log("------------------------")

// const productsIterMap = products.map((product)=>{
//     console.log(product.name);
// });

// console.log("forEach",productsIterForEach);
// console.log("map",productsIterMap);
// //Cuando decimos que forEach no retorna nada quiere decir que no se puede
// //guardar dentro de una variable