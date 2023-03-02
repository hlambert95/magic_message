//create a function that randomly selects a Hogwarts house
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

