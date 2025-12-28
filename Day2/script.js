// Q.1 Math functions:

    // console.log(Math.ceil(10.2));            // Output: 11 - It pulls up the number to next number means 10.2 will be 11.
    // console.log(Math.floor(10.2));           // Output: 10 - It pulls down the number to next number means 10.2 will be 10.
    // console.log(Math.round(10.2));           // Output: 10 - It rounds the number means 10.2 will be 10. 10.5 will be 11. 10.8 will be 11.
    // console.log(Math.abs(-10));              // Output: 10 - It gives the absolute value means -10 will be 10.
    // console.log(Math.trunc(10.22222));       // Output: 10 - It trims the numbers after decimal means 10.22222 will be 10.
    // console.log(Math.pow(5, 2));             // Output: 25 - It raises the number to the power means 5^2 will be 25.
    // console.log(Math.sqrt(25));              // Output: 5 - It gives the square root of the number means 25 will be 5.
    // console.log(Math.cbrt(125));             // Output: 5 - It gives the cube root of the number means 125 will be 5.
    // console.log(Math.max(10, 20, 40));       // Output: 40 - It gives the maximum number means 10, 20, 30, 40 will be 40.
    // console.log(Math.min(10, 20, 40));       // Output: 10 - It gives the minimum number means 10, 20, 30, 40 will be 10.
    // console.log(Math.random());              // Output: 0.123456789 - It gives the random numbers from 0 to 1 also Math.random used for random number generation or otp.

    // let a = 234.5678;
    // console.log(a.toFixed(2))                // Output: 234.57 - It gives the number with fixed decimal means we have used toFixed(2) 234.5678 will be 234.57 it will return only 2 numbers after decimal.

// -----------------------------------------------------------------------------------

// Q.2 Generate otp.

    // console.log(Math.floor(Math.random() * 9000 + 1000)); // Output: used Math.floor to remove the decimal numbers and Math.random to generate random numbers, 1000 to 9999 4 digit otp will be generated.

// -----------------------------------------------------------------------------------

// Q.3 Accept two numbers and print the greatest between them.

    // let firstNumber = prompt('Enter first number');
    // let secondNumber = prompt('Enter second number');

    // if (firstNumber>secondNumber) {
    //     console.log(firstNumber + ' is Greater.');
    // } else {
    //     console.log(secondNumber + ' is Greater.');
    // }

// -----------------------------------------------------------------------------------

// Q.4 Accept an integer and check whether it is an even or odd.

    // let number = prompt('Enter an number');

    // if (number % 2 == 0) {
    //     console.log(number + ' is even number.');
    // } else {
    //     console.log(number + ' is odd number.');
    // }

// -----------------------------------------------------------------------------------

// Q.5 Accept name and age from user. Check if user is valid for vote or not.

    // let userName = prompt('Enter your name');
    // let age = prompt('Enter your age');

    // if (age <= 17) {
    //     console.log(userName + ' is not eligible to vote.');
    // } else if(age >= 18) {
    //     console.log(userName + ' is eligible to vote.');
    // } else {
    //     console.log(userName + ' is not valid.');
    // }