

var userEntry = parseInt(prompt('Please enter and odd number between 1 and 50.'));

for ( var i = 1; i < 50; i++){
    if (userEntry % 2 === 0 || userEntry > 50) {
        userEntry= prompt('That was not a valid number, please try again.');
        console.log('The number to skip is: ' + userEntry);
    }
}


for (let i = userEntry; i < 50; i++){
    if (i % 2 !== 0){
        console.log('Here is an odd number: ' +i);
    }
}