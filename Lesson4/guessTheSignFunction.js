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