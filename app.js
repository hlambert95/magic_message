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
                return "hard";
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
    return `${length()} and ${durability()} with a core of ${core()}`;
};

    


console.log(`${house()}, ${wand()}`);