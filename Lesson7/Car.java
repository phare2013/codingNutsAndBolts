// Java example of car class for your reference

public class Car {
    // instance variables
    public String make;
    public String model;
    public String wheels;
    public String color;
    
    // constructor
    Car(String make, String model, String wheels, String color){
        this.make = make;
        this.model = model;
        this.wheels = wheels;
        this.color = color;
    }


    //example of a method
    public void goBeep(){
        System.out.println("BEEP BEEP!!!");
    }

    //another public method
    public void getTurbo(){
        this.complexNo2Injection();
    }

    //private methods in java explicitly say private,
    //and java doesn't let users of the class call these functions directly 
    //to use whats in this function, you have to call "getTurbo" above
    private void complexNo2Injection(){
        //some complex distribution No2 injection into the engine....
        System.out.println("VROOM VROO!!!!");
    }

}