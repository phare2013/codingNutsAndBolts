// example of an object in javascript

let contact = {
    firstName: "paris",
    lastName: "you Wish",
    favoriteColor: "black",
    favoriteHobby: "coding"
}

// console.log(contact);


/** Accessing pieces of javascript object using the ".[property name]" */

// console.log(contact.firstName);
// console.log(contact.lastName);

/** Access pieces using the bracket-notation */
// console.log(contact['firstName']);
// console.log(contact['lastName']);


let contact1={ };
//setting properties on object
contact1.firstName = "paris";
contact1.lastName = "you Wish";
contact1.favoriteColor = "Black";
contact1.favoriteHobby = "coding";
contact1['favoritePet'] = 'dogs';

// console.log(contact1);

introductionFunction = function(){
    console.log(`
        Hello, my name is ${this.firstName} ${this.lastName}.
        My favorite color is ${this.favoriteColor}.
        My favorite Hobby is ${this.favoriteHobby}.
    `)
}

// console.log(introductionFunction()); // This should print "undefined" in the print statement b/c not in object and using "this" keyword.

contact1.introduceYourself = introductionFunction; //setting to a defined function

// console.log(contact1);

// console.log(contact1.introduceYourself());

contact1.nameFavoriteGame = function(){
    return("May favorite game is Super Smash Bro's Melee");
}

// contact1.nameFavoriteGame();

contact1.introduceYourself = function(){
        console.log(`
            Hello, my name is ${this.firstName} ${this.lastName}.
            My favorite color is ${this.favoriteColor}.
            My favorite Hobby is ${this.favoriteHobby}.
        `, 
        `Oh...i forgot ${this.nameFavoriteGame()}`
        )
    }

// console.log(contact1.introduceYourself());

let myComputer = {
    make: "Apple",
    model: "Macbook Pro",
    color: "Galaxy Gray",
    year: "2018"
}

contact1.computer = myComputer;

// console.log(contact1.computer);

console.log(contact1.computer.year);

