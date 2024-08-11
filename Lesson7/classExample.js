//example car objects
let car2 = {
    make: "Tesla",
    model: "Model S - Dual Motor",
    wheels:"20 x 9.5' BLACK Shiny",
    color: "black", 
    goBeep: function(){
            console.log("BEEP BEEP!!!")
    }
}
//...
let car3 = {
    make: "Land Rover",
    model: "Range Rover",
    wheels:"21' Satin Dark-Grey",
    color: "Santorini Black", 
    goBeep: function(){
            console.log("BEEP BEEP!!!")
    }
}
//...

// console.log(car2);


// Javascript Class Examples

class Car {
    //instance variables
    make = "Chevy";
    model = "Camaro ZL1";
    wheels = "20'' Black Matte";
    color = "black";
}

let CarObject1 = new Car();

// console.log(CarObject1);

let CarObject2 = new Car();

// console.log(CarObject2);

let CarObject3 = new Car();

// console.log(CarObject3);

class BetterCarClass {
    //instance variables
    make = undefined;
    model = undefined;
    wheels = undefined;
    color = undefined;

    //constructor - first piece of code that is ran at the establishment of the object.
    //may contain "extra instructions" for creating the object
    constructor(){
        this.make = "Chevy";
        this.model ="Camaro";
        this.wheels = "20'' black Matte";
        this.color = "black";
    }
}


// console.log(new BetterCarClass()); 

class BestCarClass {
    //instance variables
    make = undefined;
    model = undefined;
    wheels = undefined;
    color = undefined;
    privateProperty = "";

    //constructor - first piece of code that is ran at the establishment of the object.
    //may contain "extra instructions" for creating the object
    constructor(make,model,wheels,color){
        this.make = make;
        this.model =model;
        this.wheels = wheels;
        this.color = color;
    }

    //example of a method
    goBeep(){
        console.log('BEEP BEEP!!!');
    }

    getTurbo(){
        this._complexNo2Injection();
    }

    //pretend this function is a Private function hiding some complex calculation of injection for No2...
    _complexNo2Injection(){
        //some complex distribution No2 injection into the engine....
        console.log('VROOM VROO!!!!');
    }


}

// console.log(new BestCarClass("Chevy", "Camaro ZL1", "20'' Matte", "Black"));
// console.log(new BestCarClass("Land Rover", "Range Rover", "22'' Matte", "Santorini Black")); 

let camaro = new BestCarClass("Chevy", "Camaro ZL1", "20'' Matte", "Black");

// console.log(camaro.goBeep());
// console.log(camaro.getTurbo());

//example of a built int class
let nameString = "Paris";

// console.log(nameString.length); //should provide a number 5 for five characters

// console.log(nameString.includes("x")); //returning false because paris does not include "x"

let addressArray = ["123", "sesame", "street", "nw", "ny"];

addressArray.push("New York");

// console.log(addressArray);


// console.log(typeof addressArray); // should say object

console.log(typeof nameString); //should say "string"
