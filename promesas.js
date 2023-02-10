/*Promesas:
El objeto Promise en JavaScript representa una operacion asincrona (y su valor resultante) que eventualmente se completara (o fallara).

Una promesa puede estar en uno de estos estados:

peding (peniente) : estado inicial, ni cumplida ni rechazada.
fuldilled (cumplida): significa que la operacion se completo con éxito
rejected (rechazada): significa que la opeación falló

Estructura de una promesa:

new Promise((resolve, reject) => {
    (cuerpo de la promesa)
})
*/

//Ejemplo 1: 
let numero = 15

const validar = new Promise((resolve, rejecct) => {
    if (numero ==10){
        resolve('El numero es válido');
    } else {
        rejecct('El numero es invalido');
    }
   
});

validar
   .then(resuelto => {
         console.log('exitosa: ', resuelto);
   })
   .catch(error => {
        console.log('error: ', error);
   })


//Ejemplo 2 Pedir comida:
let ingrediente = false

const preparacion = new Promise((resolve, reject) =>{
    if(ingrediente == true){
        setTimeout(()=> {
            console.log('Proceso2: asincronia-comida lista')
            resolve(ingrediente)
       
        }, 4000)

    }else{
        setTimeout(()=> {
            reject('Proceso2:asincronia - no hay comida')
        }, 4000)
    }
})

console.log('Proceso 1: el cliente realiza una orden')

//objeto promesa
preparacion
   .then(res => {
         console.log('Proceso 3: cliente feliz. ', res)
   })//then : captura resolve
   .catch(error =>{
        console.log(error)
        console.log('Proceso 3: ve a comer a otro lado. ')
   })//catch : captura a reject
   .finally(()=>{
      //fin del proceso opcional
      console.log('Proceso final: gracias por visitarnos. ',)
   })

   console.log('Conversacion mientras esperan a ver si hay ingredientes')