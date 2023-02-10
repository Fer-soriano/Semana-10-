/*¿Que son las funciones asincronas?
El término asincrono se refiere a una situacion en la que dos o más eventos
ocurren al mismo tiempo. o en terminos mas sencillos, pueden suceder varias cosas relacionadas sin esperar a que secomplete la accion anterior */

//Ejemplo

let saludo = () => console.log('1-Hola mundo');
saludo();

let sentarse = () => console.log('2-Sentarme');
setTimeout(sentarse,5000);

let mano = () => console.log('3-Estrechar la mano');
mano();