//Function Scope o local Scope

/**
     * Cada funcion va a tener su propio alcance
     * sus variables seran accesibles solamente aqui 
     * y en sus funciones anidadas
 */
function greeting(){
    let userName ='Ana';
    console.log(userName);
    
    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();

//No se puede llamar la variable userName porque
//no existe fuera de la funcion.