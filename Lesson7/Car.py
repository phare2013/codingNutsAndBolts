#python example of a class for your reference

class Car:

    #constructor
    def __init__(make,model,wheels,color):
        self.make = make
        self.model = model
        self.wheels = wheels
        self.color = color

    #example of a public method
    def goBeep():
        print('BEEP BEEP!!!')

    
    def getTurbo():
        this.__complexNo2Injection()

    #python denotes private methods with a double-underscore
    #but just like javascript...this is just a visual indication that you might not want to mess with this.
    # and they are laxed enough to let you cal it.
    def __complexNo2Injection():
        print('BEEP BEEP!!!')

    
    