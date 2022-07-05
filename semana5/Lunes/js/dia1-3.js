//FOR 
//RECORDEMOS QUE UN FOR NOS PERMITE ITERAR(RECORRER) UN ARRAY
// FOR CLASICO
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
    // for (let i of ['aaa','bbb']) {
        
    // }

    // for (let i in ["aaa","bbb"]) {

    // }

// lo que sigue del for es el ForEach
// Este forEach es usando para p oder iterar elementos sin retornar nada
// en foreach no existe el return

const alumnos = ["juan","pepe","luis","maria","carla","ale"];

// LA FORMA EN LA CUAL USAMOS FOREACH ES LA SIGUIENTE
//! el forEach es una funcion de los arrays
// 2 Cosas
// 2: Value => Es el valor que extraemos en cada intencion
// 1: Index => Es la posicion del elemento
alumnos.forEach((value,index)=> {
    console.log("index =>", index);
    console.log("value =>", value);
});
//! ESTA FORMA DE RECORRER EL ARREGLO ES MODERNA
//! TENER EN CUENTA QUE EL RETURN NO ES POSIBLE EN EL FOREACH

const carros = [
    {
        modelo: "Nissa GTR",
        price: 10000,
    },
    {
        modelo: "Mercedes GLA 2000",
        price: 20000,
    },
    {
        modelo: "BMW x6",
        price: 30000,
    },
]

carros.forEach((carro,index)=>{
    console.log(carro.modelo);
    // console.log("index =>", index);
    // console.log("value =>", value);
});
// alumnos.forEach();