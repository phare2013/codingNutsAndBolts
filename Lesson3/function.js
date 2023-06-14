/*functions*/

//example function structure
let exampleFunction = function(){
    //....some statements here...
}


/** EXAMPLE FUNCTIONS */

//example in Java
//static void  main(){
    //code to the executed
//}

//example in Pyhthon
//def example_function():
   // #some statements here
   //return

/** Our first function.... */

//our first program
// let salutation = "Hello World";
// console.log(salutation);

//our first function
// let greetingFunction = function(){
//     let salutation = "Hello World";
//     console.log(salutation);
// }

// //calls the function
// greetingFunction();

/* Inputs */

// let someFunctionWithInput = function(someVariable1, someVariable2){
//     //do some things
//     console.log(someVariable1, someVariable2);
// }

// enhancing our first program again
// let greetingFunction = function(firstname, lastName){
//     console.log(firstname, lastName);
// }

// greetingFunction("Paris", "Hare");

//default values
// let greetingFunction = function(firstname="paris", lastName="hare"){
//     console.log(firstname, lastName);
// }

// greetingFunction(); //<-- This will print "Paris Hare"
// greetingFunction("Han", "Solo"); //<-- This will print "Han Solo"
// greetingFunction(undefined, "Solo"); //<-- This will print "Paris Solo"

/* Return Statements */

// let saySomethingFunnyAbout = function(subject="blonde"){
//     return ("So a brunette, a red-head, and a " + subject + "walk into a bar...");
// }

// let joke = saySomethingFunnyAbout();

// console.log(joke);


// let fakeFunction = function(){
//     console.log("in the function");
//     return("done with the function");
//     console.log("waitt..."); //<-- Will not run
// }

// let result = fakeFunction();
// console.log(result);


/**
 * Example with Multiple Functions
 */

let addFunction= function(number1, number2){
    return number1 + number2;
}

let subtractFunction = function(number1, number2){
    return number1 - number2;
}

let multiplyFunction = function(number1, number2){
    return number1 * number2;
}

let divideFunction = function(number1, number2){
    return number1 / number2;
}


let takeTwoNumbers = function(number1, number2){
    let sum = addFunction(number1, number2);
    let difference = subtractFunction(number1, number2);
    let product = multiplyFunction(number1, number2);
    let quotient = divideFunction(number1, number2);

    //printing things here
    console.log(`
    sum = ${sum}
    difference = ${difference}
    product = ${product}
    quotient = ${quotient}
    `);
}

takeTwoNumbers(1,1);
