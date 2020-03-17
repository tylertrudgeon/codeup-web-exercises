console.log('Hello from external JavaScript');

alert('Welcome to my Website!');

var favoriteColor = prompt('What is your favorite color?');
alert(favoriteColor + ' is my favorite color too!');

var littleMermaid = prompt('How many days will you rent The Little Mermaid?');

var brotherBear = prompt('How many days will you rent Brother Bear?');

var hercules = prompt('How many days will you rent Hercules?');

var totalCost = (littleMermaid * 3.00) + (brotherBear * 3.00) + (hercules * 3.00);

alert(totalCost + (' dollars is your total cost.'));



var googlePay = prompt('How much is your hourly pay for Google?');

var amazonPay = prompt('How much is your hourly pay for Amazon?');

var facebookPay = prompt('How much is your hourly pay for Facebook?');

var googleHours = prompt('How many hours did you work for Google?');

var amazonHours = prompt("How many hours did you work for Amazon?");

var facebookHours = prompt("How many hours did you work for Facebook?");

var totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);

alert(totalPay + (' dollars is how much you will be paid.'));



var classIsFull = false;

var classScheduleConflict = false;

var canAttendClass = (!classIsFull && !classScheduleConflict);

alert('Student can attend class ' + canAttendClass);



var numberOfItems = prompt('How many items will you be buying?');

numberOfItems = parseInt(numberOfItems);

var isOfferExpired = false;

var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !isOfferExpired) || (numberOfItems >= 2 && !isOfferExpired);

alert('Offer is valid ' + isOfferValid);

