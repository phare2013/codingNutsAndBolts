//Backend GPS system
//Input
// 1. Current Position on earth (Latitude and Longitude)
// 2. Position on earth where the user wants to be.
//Output
// 1. The full path (in locations) of the user of the app (from start to end location)
// 2. while in navigation, continuously check and provide the current location 
// 3. calculate speed of the user based on the information above.


//startNavigation - take the input provided by frontend, orchestrates the entirety of the functionality
// startNavigation = function(startPositionLatitude, startPositionLong, endPositionLat, endPositionLong){ <-- dont do this
// }

// best buy corporate
let startLocation = {
    long:-83.616170,
    lat:42.558930, 
    time: "now"
}

//us bank stadium
let desiredLocation = {
    long: -81.447230,
    lat: 38.215880,
    time: undefined
}

let screen_navigationPathLocations;
let screen_currentLocation;
let screen_previousLocation;
let screen_currentSpeed;

let notAtDestionation;

calculatePathToDesiredLocation = function(){
    //use magic to calculate the shortest path to destination...
    //provides path information to the interface for display and...
    /* set screen_navigationPathLocations to array of location objects - represent a location along the path to the destination.
    [
        {
            long: ...,
            lat: ...
            time: ...
        },
        {
            long: ...,
            lat: ...
            time: ...
        },
        ..
    
    ];
    */
}


checkWhereWeAre = function(){
    //use GPS sensor to get location 
    /*return: {
            long: current long...,
            lat: current Lat...
            time: timestamp for which we've taken this measurement
        }*/
};

calculateSpeed = function(){
    // ...calculate speed using Start and end location difference in distance and TIMEstamps from both current and previous locations. 
   //set screen_currentSpeed with result;
}

navigate = function(){

    do{

        if(screen_currentLocation !== null){
            //set previous location to current location before new current location calculated
            screen_previousLocation = screen_currentLocation;
        }

        //check where we are...possibly with GPS sensor
        //screen_currentLocation = checkWhereWeAre();
        
        //calculate speed using location and time properties
        calculateSpeed();

          //if we are at destionation (comparing current location with desired locations)
          //set notAtDestionation = false;
    }
    while(notAtDestionation == true);


}

startNavigation = function(startLocation, desiredLocation){ 

    //initiate the notAtDestination variable
    notAtDestionation = true;

    //calculate the path to the desired location, and provide info to the screen. 
    calculatePathtoDesiredLocation();

    //navigate - doings tasks for checking current location, resetting variables, calculating speed.
    navigate();
}