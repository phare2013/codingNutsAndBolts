// Requirements
//Ask for your birthday month
//allow person to enter their birthday month (1-12)
//if statements to handle blanks for number not in 1-12
//use case statements to branch return sign based on month given.
// a bug is left the program - bonus for checking if answer is a number or not and failing validation if not.
//print that response

//set up the input reader 
const readerMaker = require('node:readline');
//reader of the response from user
let reader;
//hold the answer for further processing in code `
let answer;


function createInputInterface(){
    reader = readerMaker.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    )
}

function takeInput(){
    reader.question('Please Enter your month(i.e. 1-12):', (input) =>{
        answer = input;
        reader.close();

         //check the answer for valid answers (1-12 and no blanks)
        //use if statements to handle these cases
    if(isAnswerValid()){
       //use case-statements to return the sign based on the month number
    guessTheSign(answer);
    }else{
        console.log("You entered an incorrect month or a blank answer. Please try to enter a month 1 - 12.");
    };

    })
}

function isAnswerValid(){
    let validAnswer = true;

    if(answer === ""){
        validAnswer = false;
    }else if(answer > 12){
        validAnswer = false;
    }else if(answer < 1){
        validAnswer = false;
    }

    return validAnswer;

}

function guessTheSign(answer){
    switch(answer){
        case "1":
            console.log(`You're an Aquerious if your birthday is before the 20th.
            Otherwise You're a Capricorn.`);
            break;
        case "2":
            console.log(`You're an Capricorn if your birthday is before the 18th.
            Otherwise You're a Pisces.`);
            break;
        case "3":
            console.log(`You're an Pisces if your birthday is before the 21sh.
            Otherwise You're a Aries.`);
            break;
        case "4":
            console.log(`You're an Aries if your birthday is before the 20th.
            Otherwise You're a Taurus.`);
            break;
        case "5":
            console.log(`You're an Taurus if your birthday is before the 21st.
            Otherwise You're a Gemini.`);
            break;
        case "6":
            console.log(`You're an Gemini if your birthday is before the 22nd.
            Otherwise You're a Cancer.`);
            break;
        case "7":
            console.log(`You're an Cancer if your birthday is before the 23rd.
            Otherwise You're a Leo.`);
            break;
        case "8":
            console.log(`You're an Leo if your birthday is before the 23rd.
            Otherwise You're a Virgo.`);
            break;
        case "9":
            console.log(`You're an Virgo if your birthday is before the 23rd.
            Otherwise You're a Libra.`);
            break;
        case "10":
            console.log(`You're an Libra if your birthday is before the 23rd.
            Otherwise You're a Scorpius.`);
            break;
        case "11":
            console.log(`You're an Scorpius if your birthday is before the 22nd.
            Otherwise You're a Saggitarius.`);
            break;
        case "12":
            console.log(`You're an Saggitarius if your birthday is before the 22nd.
            Otherwise You're a Capricorn.`);
            break;
        default:
            console.log('guess the program ran away again');
    }
}


function run(){

    //set up the reader
    createInputInterface();

    //prompt user for birthday month
    takeInput();
}

run();
