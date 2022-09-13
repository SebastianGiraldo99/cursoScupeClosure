// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money Box $${saveCoins}`);


// }

// moneyBox(5);
// moneyBox(5);



function myMoneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`Money Box: $${saveCoins}`)
    }
    return countCoins();
}

const moneyBox = myMoneyBox();
moneyBox.countCoins(5);
moneyBox(5);
moneyBox(15); 