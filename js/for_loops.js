

function showMultiplicationTable(aNumber) {
    for (var i = 1; i <= 10; i++) {
        var answer = aNumber * i;
        console.log(aNumber + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(4);




for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even.');
    } else {
        console.log(randomNumber + ' is odd.');
    }
}



for (var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

for (var i = 100; i >= 5; i -= 5){
    console.log('Logging all numbers from 100 to 5 by increments of 5: ' + i);
}
