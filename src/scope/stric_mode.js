/**
 * El usar el modo estrico tiene muchos beneficios 
 * como lo son el eliminar el errores sileciosos 
 * haciendo que se marquen como errores y termine el 
 * proceso
 *
 * Corrigiendo errores que dificultan el uso en los 
 * motores de JS haciendo que en situaciones el codigo
 * stricto corra mas rapido
 * 
 * Prohibe cierta sintaxis. 
 */


'use strict';

pi = 3.1416;
console.log(pi);


function myfunction(){
    'use strict';
    return pi = 3.1416;
}
console.log(myfunction());

