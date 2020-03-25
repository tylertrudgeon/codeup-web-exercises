

function showMultiplicationTable(aNumber) {
    console.log(aNumber * 1);
    console.log(aNumber * 2);
    console.log(aNumber * 3);
    console.log(aNumber * 4);
    console.log(aNumber * 5);
    console.log(aNumber * 6);
    console.log(aNumber * 7);
    console.log(aNumber * 8);
    console.log(aNumber * 9);
    console.log(aNumber * 10);
}


var randomNumber = Math.floor(Math.random() * 2) + 20;

console.log(randomNumber);

console.log(showMultiplicationTable(randomNumber));


for (i = randomNumber; i <= 200) {
    if (i % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

for (var i = 1; i <= 9; i++){
    for (var j = 0; j < i; j++)
        console.log(i);
}

for (var i = 100; i > 0; i -= 5){
    console.log('Logging all numbers from 100 to 5 by increments of 5: ' +i);
}
