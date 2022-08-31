//VAR
var firtsName; // declarado (valor Undefined)
firtsName = 'Sebastian'; //Asignacion
firtsName = 'Juan'; //Reasignacion

var lastName = 'David' // Declaracion y asignacion
lastName = 'Ana' //Reasignacion

var secondName = 'David'; //Declarar y asignar
var secondName = 'Ana';  // Redeclarar y reasignar

//LET
let fruit = 'Apple'; // Declarar y Asignar
fruit = 'Kiwi'; // Reasignar

//let fruit = 'Banana'; No se puede redeclarar

//CONST

const animal = 'Dog'; //Declaracion y asignacion
//animal = 'Gato'; No se puede reasignar porque es una constante
//Animal seguira siendo Dog.
//conts animal = 'snake' No se puede redeclara y reasignar.

/**
 * Al ser la constante veiculos referenciada como arreglo 
 * puedo trabajarla como arreglo haciendo push y pop y otras 
 */
const vehicles = [];
vehicles.push("Car1");
console.log(vehicles);

vehicles.pop();
console.log(vehicles)
