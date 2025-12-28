// Q.1) Difference between var, let, and const

// 1) var
    // var is function-scoped.
    // It is hoisted, meaning the variable is moved to the top of its scope,
    // so it can be used before declaration (but its value will be undefined).
    // It also allows redeclaration and reassignment.

    // a = 10;
    // var a;
    // console.log(a); // 10

// 2) let
    // let is block-scoped.
    // It allows reassignment but does NOT allow redeclaration in the same scope.

    // let b = 10;
    // console.log(b); // 10

// 3) const
    // const is also block-scoped.
    // It does NOT allow reassignment or redeclaration.

    // const c = 10;
    // console.log(c); // 10

// -----------------------------------------------------------------------------------

// Q.2) Sum of two integers.

    // let a = 10;
    // let b = 20;

    // console.log(a+b)

    // Output: 30

// -----------------------------------------------------------------------------------

// Q.3) Relation between integer and string.

// Relation between String and String.

    // String + String = String (Concatination).
    // let a = "Hello"
    // let b = " World"
    // console.log(a+b);  
    
    // Output: Hello World

// Relation between Intiger and String.

    // Intiger + String = String (Concatination).
    // let a = 10
    // let b = " Ten"
    // console.log(a + b);  

    // Output: 10 Ten
        
// Relation between Intiger and Intiger.

    // Intiger + Intiger = Intiger (Arthematic Operation)
    // let a = 10
    // let b = 20
    // console.log(a+b);  

    // Output: 30

// -----------------------------------------------------------------------------------

// Q.4) Sum and Message. -type coercion

    // let a = 10;
    // let b = 20;

    // console.log('The sum of '+ a + ' and '+ b + ' is '+ a+b )

    // Output: The sum of 10 and 20 is 1020

// -----------------------------------------------------------------------------------

// Q.5) what is type coercion?

    // Type coercion is the automatic conversion of one data type to another data type by the operator.

    // Only + operator is used for type coercion or concatination.

            // console.log(10 + '10')    // 1010 - Concatination
            // console.log(10 + 10)      // 20 - Arthematic operation or Addition
            // console.log(10 - '10')    // 0 - Only Subtraction
            // console.log(10 - 10)      // 0 - Only Subtraction

// -----------------------------------------------------------------------------------

// Q.6) Accept and print the answer.

    // let age = prompt('Enter your age');
    // console.log('Age:',age);

    // Output: Age: 20;

// -----------------------------------------------------------------------------------

// Q.7) Swap two variables.

// 1st Method: by using extra variable.

    // let a = 10;
    // let b = 20;

    // let temp = a;
    // a = b;
    // b = temp;

    // console.log(a,b);

    // Output: 20 10

// 2nd Method: by two variable itself using mathematical calculation.

    // let a = 10;
    // let b = 20;

    // a = a + b; // 30
    // b = a - b; // 10
    // a = a - b; // 20

    // console.log(a, b)

    // Output: 20 10

// 3rd Method: by Destructuring method.

    // let a = 10;
    // let b = 20;

    // [a, b] = [b, a];

    // console.log(a,b);

    // Output: 20 10

// -----------------------------------------------------------------------------------

// Q.8) what is Modulus and how to use it?

// It returns only remainder.

    // console.log(10 % 2);
    // Output: 0

    // console.log(4 % 10);  // When dividend is less than divisor, modulo returns the dividend itself.
    // Output: 4

// -----------------------------------------------------------------------------------

// Q.9) what is condition operator?

    // console.log(10>8 && 10>9); // true // if anyone of the condition is false, then result will be false and if both are true, then result will be true.

    // console.log(10>8 || 10>11); // true // if anyone of the condition is true, then result will be true and if both are false, then result will be false.

// -----------------------------------------------------------------------------------

// Q.10) what is ternary operator?

    // console.log(10>8 ? 'True' : 'False');  // true

    // console.log(10>11 ? 'True' : 'False');  // false

// -----------------------------------------------------------------------------------

// Q.11) what is uniary operator?

    // There are two types of uniary operator.

    // 1) increment operator. (++a, a++)
        // let a = 10;
        // a++;
        // console.log(a);
        // Output: 11

        // let a = 10;
        // ++a;
        // console.log(a);
        // Output: 11

    // 2) decrement operator. (--a, a--)
        // let a = 10;
        // a--;
        // console.log(a)
        // Output: 9

        // let a = 10;
        // --a;
        // console.log(a)
        // Output: 9

    // Difference between increment and decrement operator is that increment operator increase the value by one and decrement operator decrease the value by one.
    // Difference between pre-increment and post-increment operator is that pre-increment operator increase the value by one before using it and post-increment operator increase the value by one after using it.

    // Ex: Dominos (Pre-increment)
    // First pay -> Eat
    // Change -> Use

    // let a = 10;
    // let b = ++a;
    // console.log(a, b);
    // Output: 11 11

    // Ex: Dhaba (Post-increment)
    // First eat -> Pay
    // Use -> Change

    // let a = 10;
    // let b = a++;
    // console.log(a, b);
    // Output: 11 10

    // let a = 10;
    // console.log(a++ + ++a); // a++ use the value of a first then increase the value of a by 1. and ++a first add the value of a by 1 and then use. so the answer is 22 because 10 + 12 = 22.
    // Output: 22

// -----------------------------------------------------------------------------------