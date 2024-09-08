/*Example java code showing same principles */
public class JavaInheritanceExample {
    public class Vehicle {
    
        private String make;
        private String model;
        private int wheelCount;
        private String color;
    
        //constructor
        public Vehicle(String make, String model, int wheelCount, String color){
            this.make = make;
            this.model = model;
            this.wheelCount = wheelCount;
            this.color = color;
        }
    
        //example public method
        public void goBeep(){
            System.out.println("Beep Beep");
        }
    }
    
    
    public class Car2 extends Vehicle{
        private Boolean hasDropTop;
    
        //constructor - java requires the 'super' or it will yell at you.
        Car2(String make, String model, int wheelCount, String color, Boolean hasDropTop){
            super(make, model, wheelCount, color);
            this.hasDropTop = hasDropTop;
        }
    
        //has its own method
        public void dropTheTop(){
            if(this.hasDropTop == true){
                System.out.println("dropping the top!!!");
            }else{
                System.out.println("You model doesn't have the drop to feature!!!");
            }
        }
    }
    
    
    
    public class Motorcycle extends Vehicle{
    
        // NOTE in java you can't override the properties!!!
        public int color;
    
        //constructor - java requires the 'super' or it will yell at you.
        Motorcycle(String make, String model, int wheelCount, String color){
            super(make, model, wheelCount, color);
        
        }
    
        //java uses whats called annotations like the '@override below to be explicit about what we are overriding. 
        //Only methods(behavior) can do this'
        //with you cant change the TYPE though. For example you cant make this method return a string instead of nothing.
        @Override
        public void goBeep(){
            System.out.println("meep meep!!!");
        }
    }
}
