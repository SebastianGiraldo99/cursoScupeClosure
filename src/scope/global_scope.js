//Variables

var a; // Declarar
var b = 'b'; //Declarar y asignar
b = 'bb'; //Reasignar
var a = 'aa' //Redeclaracion


//Global Scope
//Cualquier variable que se encuentre en el documento
//pasarian a ser variables globales

/**
 * Ejemplo
 */

var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //Si se asigna asi pasa a ser una varible global.
    console.log(country);
}
countries();
