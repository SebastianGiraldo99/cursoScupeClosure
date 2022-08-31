//En ECMA Script 6+ se introdujo el concepto de 
// Block Scope


/**
 * El concepto block scope significa 
 * que las variables del bloque solo pueden
 * ser usadas para ese bloque de codigo.
 */
function fruits(){
    if(ture){
        var fruit1 = 'Apple';//function scope
        let fruit2 = 'kiwi';// block scope
        const fruit3 = 'banana'; //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits()