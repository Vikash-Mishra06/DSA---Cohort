// Q.1 Difference between var, let, and const

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

// Q.2 Sum of two integers.

    // let a = 10;
    // let b = 20;

    // console.log(a+b)

    // Output: 30

// -----------------------------------------------------------------------------------

// Q.3 Relation between integer and string.

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

// Q.4 Sum and Message. -type coercion

    // let a = 10;
    // let b = 20;

    // console.log('The sum of '+ a + ' and '+ b + ' is '+ a+b )

    // Output: The sum of 10 and 20 is 1020

// -----------------------------------------------------------------------------------

// Q.5 what is type coercion?

    // Type coercion is the automatic conversion of one data type to another data type by the operator.

    // Only + operator is used for type coercion or concatination.

            // console.log(10 + '10')    // 1010 - Concatination
            // console.log(10 + 10)      // 20 - Arthematic operation or Addition
            // console.log(10 - '10')    // 0 - Only Subtraction
            // console.log(10 - 10)      // 0 - Only Subtraction

// -----------------------------------------------------------------------------------

