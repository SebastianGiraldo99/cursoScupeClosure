/**
 * Que es un closure?
 * Es una funcionolidad que nos permite acceder al 
 * ambito de una funcion exterior desde una funcion
 * interior. En JS los closures se crean cada vez que 
 * una funcion es creada.
 * Los Closures no siempre son usados.
 */

const myGlobal = 0;


function myFunction(){
    const number = 1;
    console.log(myGlobal);

    function parent(){ //Funcion interna.
        const inner = 2;
        console.log(number, myGlobal);

        function child(){
            console.log(inner,number,myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();
