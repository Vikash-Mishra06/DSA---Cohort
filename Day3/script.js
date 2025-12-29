// Q.1 Accept three numbers and print the greatest among them.

// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));
// let thirdNumber = Number(prompt("Enter third number"));

// if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
//   console.log(firstNumber + " is greater");
// } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
//   console.log(secondNumber + " is greater");
// } else {
//   console.log(thirdNumber + " is greater");
// }

// -----------------------------------------------------------------------------------

// Q.2 Shop Discount calculation:
// 0-5000rs - 0% Discount
// 5000-10000 - 5% Discount
// 10000-15000 - 10% Discount

// let amount = Number(prompt('Enter a amount'));

// if (amount <= 5000) {
//   console.log('Your total Amount is ' + amount + 'rs and No Discount is applicable.');
// }
// else if (amount > 5000 && amount <= 10000) {
//   console.log('Your total Amount is ' + amount + 'rs and Discount is ' + amount * 5 / 100 + 'rs.');
// }
// else if (amount > 10000 && amount <= 15000) {
//   console.log('Your total Amount is ' + amount + 'rs and Discount is ' + amount * 10 / 100 + 'rs.');
// }
// else {
//   console.log('Your amount ' + amount + 'rs is above 15000. No discount scheme defined.');
// }

// -----------------------------------------------------------------------------------

// Q.3 Accept a year and check if it a leap year or not (google to find out what's a leap year)

// let year = Number(prompt("Enter a year."));

// if (year % 4 == 0 && year % 100 != 0) {
//   console.log(year + " is a leep year.");
// } else if (year % 400 == 0) {
//   console.log(year + " is a leep year.");
// } else {
//   console.log(year + " is not a leep year.");
// }

// -----------------------------------------------------------------------------------

// Q.4 Electricity Bill calculation.
// Unit             Price
// 0 - 100          Rs. 4.2/unit
// 101 - 200        Rs. 6/unit
// 201 - 400        Rs. 8/unit
// more than 400    Rs. 13/unit


// let unit = Number(prompt("Enter unit"));

// if (unit <= 100) console.log(unit * 4.2 + " rs bill.");
// if (unit >= 101 && unit <= 200) console.log(unit * 6 + " rs bill.");
// if (unit >= 201 && unit <= 400) console.log(unit * 8 + " rs bill.");
// if (unit > 400) console.log(unit * 13 + " rs bill");

// -----------------------------------------------------------------------------------
