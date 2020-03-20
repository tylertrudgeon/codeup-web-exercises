"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var wantToEnterNumber = confirm('Would you like to enter a number?');


if (wantToEnterNumber) {
    var aNumber = parseInt(prompt('Please enter a number'));

    if (isNaN (aNumber)) {
        alert('That is not a number.')
    }
}


if (aNumber % 2 === 0) {
    alert(aNumber +' is even');
} else {
    alert(aNumber +' is odd.');
}

function addHundo (){
    alert((aNumber + 100) + ' is your number added to 100.');
}

addHundo();

if (aNumber >= 0) {
    alert('The number is positive.')
} else {
    alert('The number is negative.')
}

    /**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName === 'blue') {
       return "Blue is the color of the sky.";
    } else if (colorName === 'red') {
        return "Strawberries are red.";
    } else if (colorName === 'cyan') {
        return "I don't know anything about cyan.";
    } else {
        return "This color wasn't listed!"
    }
}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('purple'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var colorName;

switch (randomColor) {
    case "blue":
        colorName = "Blue is the color of the sky.";
        break;
    case "red":
        colorName = "Strawberries are red.";
        break;
    case "cyan":
        colorName = "I don't know anything about cyan.";
        break;
    default:
        colorName = "This color wasn't listed!";
        break;
}

console.log(colorName);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorName = prompt("What is your favorite color?");

alert(analyzeColor(colorName));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0 || luckyNumber > 5) {
        return totalAmount;
    } else if (luckyNumber === 1) {
        return totalAmount - (0.10 * totalAmount);
    } else if (luckyNumber === 2) {
        return totalAmount - (0.25 * totalAmount);
    } else if (luckyNumber === 3) {
        return totalAmount - (0.35 * totalAmount);
    } else if (luckyNumber === 4) {
        return totalAmount - (0.50 * totalAmount);
    } else if (luckyNumber === 5) {
        return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = prompt("What was your total bill?");

function calculateTotal(luckyNumber) {
    if (luckyNumber === 0) {
        alert('Your lucky number was 0 or greater than 5. :( :( Your bill before discount was $' + totalAmount + '! $' + totalAmount + ' is your price after a discount of 0%');
    } else if (luckyNumber === 1) {
        alert('Your lucky number was 1! Your bill before discount was $' + totalAmount + '! $' + (totalAmount - (0.10 * totalAmount)) + ' is your price after a discount of 10%');
    } else if (luckyNumber === 2) {
        alert('Your lucky number was 2! Your bill before discount was $' + totalAmount + '! $' + (totalAmount - (0.25 * totalAmount)) + ' is your price after a discount of 25%');
    } else if (luckyNumber === 3) {
        alert('Your lucky number was 3! Your bill before discount was $' + totalAmount + '! $' + (totalAmount - (0.35 * totalAmount)) + ' is your price after a discount of 35%');
    } else if (luckyNumber === 4) {
        alert('Your lucky number was 4! Your bill before discount was $' + totalAmount + '! $' + (totalAmount - (0.50 * totalAmount)) + ' is your price after a discount of 50%');
    } else if (luckyNumber === 5) {
        alert('Your lucky number was 5! Your bill before discount was $' + totalAmount + '! $' + 0 + ' is your price after a discount of 100%');
    }
}

calculateTotal(luckyNumber);