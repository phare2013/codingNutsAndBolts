//Object Oriented Programming - Inheritance

//Simple Vehicle class that every vehicle

class Vehicle {
    //instance variables
    make = undefined;
    model = undefined;
    wheelCount = undefined;
    color = undefined;

    //constructor
    constructor(make, model,wheelCount,color){
        this.make = make;
        this.model = model;
        this.wheelCount = wheelCount;
        this.color = color;
    }

    //example of a method
    goBeep(){
        console.log('Beep Beep!!!');
    }
}

// console.log(new Vehicle());


//in code your code, you might want to indicate that some functionality is closely related or "extending"
//another, kinda like what we do from our parents. You also may want save time. Thats where extension comes in.

// inheritance example one; The Car - which logically extends a Vehicle - Car

class Car extends Vehicle {

}

//try logging this and see what happens
// note that out of the box, you have all of the properties of the car.
//With inheriance you can get the parents methods and even properties for free.

// console.log(new Car());

// console.log(new Car().goBeep());

//however notice that we all of the properties are empty? How do we fill them like we want.
//we use what is commonly used with Inheriance which is the super keyword(in our current constructor).


class Car2 extends Vehicle{
    hasDropTop= null;

    constructor(make, model,wheelCount,color, hasDropTop){
        super(make, model,wheelCount,color);
        this.hasDropTop = hasDropTop;
    }

    dropTheTop(){
        if(this.hasDropTop === true){
            console.log("drop the top!!!");
        }else{
            console.log("Your model doesn't support the drop top");
        }
    }
}

// console.log(new Car2("Honda", "Civic", 4,"red", true));

// console.log(new Car2("Honda", "Civic", 4,"red", false).dropTheTop());

// console.log(new Car2("Honda", "Civic", 4,"red", false).model);


class Motorcycle extends Vehicle {

    color = {
        primaryColor: undefined,
        secondaryColor: undefined
    }

    constructor(make, model, wheelCount, primaryColor, secondaryColor){
        super(make, model, wheelCount,undefined);
        this._setPrimaryAndSecondaryColor(primaryColor,secondaryColor)
    }

    _setPrimaryAndSecondaryColor(primaryColor, secondaryColor){
        this.color.primaryColor = primaryColor;
        this.color.secondaryColor = secondaryColor;
    }

    goBeep(){
        console.log("meep meep!!!");
    }
}

// console.log(new Motorcycle("Kawasaki", "Ninja", 4, 'blue', 'grey'));

console.log(new Motorcycle("Kawasaki", "Ninja", 4, 'blue', 'grey').goBeep());
