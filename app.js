//house function that randomly selects a Hogwarts house
let house = () => {
    //assign num a random number 1-4
    let num = Math.floor(Math.random() * 4) + 1;
    
    //return correlating house name when number is assigned to num variable
    switch(num) {
        case 1:
            return "Gryffindor";
            break;
        case 2:
            return "Hufflepuff";
            break;
        case 3:
            return "Ravenclaw";
            break;
        case 4:
            return "Slytherin";
    };
};

//wand function that randomly pieces together wand length, density and material
let wand = () => {
    
    //function to determine length
    let length = () => {
        
        //assign variable num a random number between 1-4
        let num = Math.floor(Math.random() * 4) + 1;

        //return correlating length for each number
        switch (num) {
            case 1:
                return "10 inches";
                break;
            case 2:
                return "11 inches";
                break;
            case 3:
                return "12 inches";
                break;
            case 4:
                return "13 inches";
            };
        };

    //function to determine durability
    let durability = () => {
        
        //assign variable num a random number between 1-4
        let num = Math.floor(Math.random() * 4) + 1;

        //return correlating density for each number
        switch (num) {
            case 1:
                return "flexible";
                break;
            case 2:
                return "reasonably pliable";
                break;
            case 3:
                return "fragile";
                break;
            case 4:
                return "unbreakable";
        };
    };

    //function to determine core
    let core = () => {
        //assign variable num a random number between 1-4
        let num = Math.floor(Math.random() * 4) + 1;

        //return correlating length for each number
        switch (num) {
            case 1:
                return "Dragon Heartstring";
                break;
            case 2:
                return "Phoenix Feather";
                break;
            case 3:
                return "Unicorn Tail Hair";
                break;
            case 4:
                return "Thestral Tail Hair";
        };
    };

    //concatinate the three variable of the wand;
    return `${length()}, ${durability()} with a core of ${core()}`;
};

 //pet function that randomly selects a magical pet
let pet = () => {
    //assign num a random number 1-4
    let num = Math.floor(Math.random() * 4) + 1;
    
    //return correlating pet when number is assigned to num variable
    switch(num) {
        case 1:
            return "Phoenix";
            break;
        case 2:
            return "Graphorn";
            break;
        case 3:
            return "Hippogriff";
            break;
        case 4:
            return "Dragon";
    };
};

//prompt-sync module to require user enter
const prompt = require('prompt-sync')();

//prompt for user's name
const name = prompt('What is your name?');

//concatinate user's name with house(), wand() and pet() functions
const user = `Congratulations ${name}! Your Hogwarts House is: ${house()}. Your wand is ${wand()}. The magical pet to join you on your adventure is a ${pet()}!`;

//print to terminal
console.log(user);