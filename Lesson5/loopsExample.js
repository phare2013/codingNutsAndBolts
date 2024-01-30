/**
 * Loop htrough a list of states (given states)
 * count the number of letters in each states name
 * Do this using a combination of  while loop (go through state) and a for loop (to count state name length)
 * finally, print the state next to its number like [state name]: count
 */

let stateList = [
    "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function countLettersInState(givenState){
    let count = 0;

    for(let i=0; i<givenState.length;i++){
        count ++;
    }

    return count;
}

function run(){
    //loop through the states using thw WHILE
    //".length" is the way to know the size of an array
    while(stateList.length > 0){
        //".shift() grabs first item in array (from left)"
        let givenState = stateList.shift();
        let totalLetters = countLettersInState(givenState);
        console.log(`${givenState} : ${totalLetters}`);
    }
}

run();