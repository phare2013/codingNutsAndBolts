/*branches */

//if -else branches

//example

// let x = 1;

// the condition in parenthesis converts to "true" value = run the code in-between
// if(x > 0){
//     console.log("Greater than 0!!!");
// }

// does nothing because x is not greater than 2
// if(x > 2){
//     console.log("Greater than 0!!!");
// }


// introduce the  else - Do this or do that

// let x = 1;

// //branches
// if (x > 0){
//     console.log("x is greater than 0");
// }else {
//     console.log("it is not greater than 0...probably zero");
// }

// //runs no matter what 
// console.log("something after");

//Case Statements

// let returnDayOfWeekName = function(dayNumber){

//     switch(dayNumber){

//         case 1: 
//             return "Sunday";
//         case 2:
//             return "Monday";
//         case 3: 
//             return "Tuesday";
//         case 4: 
//             return "Wednesday";
//         default: 
//             return "pick a day number 1-4"

//     }
// }

// console.log(returnDayOfWeekName(5));

// let valueToExamine = 6;

// switch(valueToExamine){

//     case 1: 
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//          break;
//     case 3: 
//     console.log("Tuesday");
//         break;
//     case 4: 
//     console.log("Wednesday");
//         break;
//     default: 
//     console.log("pick a day number 1-4");

// }


//else-if


let elseIfNumber = 5;

if(elseIfNumber === 0 ){
    console.log("Im equal to zero");
}
else if(elseIfNumber === 5){
    console.log("Yes I am equal to 5, that's special");
}
else if(elseIfNumber > 0){
    console.log("Im greater than zero");   
}
else{
    console.log("im probably less than zero");
}
