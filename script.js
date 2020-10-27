

function onUserInput() {
    let choice = document.getElementById('choice').value;
    return choice;
}

function displayNoneList(){
    document.querySelector('ul').style.display = "none";
}

function userChoice() {
    let choice = onUserInput();
    if (choice == "Piece of paper") {
        document.getElementById("text").innerHTML = "You take the piece of paper out of your pocket and hold it up";
        displayNoneList();
        setTimeout(pieceOfPaper, 2000);
    } else if (choice == "Business card") {
        document.getElementById("text").innerHTML = "You take the business card out of your pocket and read it";
        displayNoneList();
        setTimeout(businessCard, 2000);
    } else if (choice == "Mobile phone") {
        document.getElementById("text").innerHTML = "You try to turn on the phone but it is dead";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Talk to the man") {
        document.getElementById("text").innerHTML = "Why hello there, good sir! Would you by any chance happen to know who George Hungus is?";
        displayNoneList();
        setTimeout(businessCard, 4000);
    } else if (choice == "Knock on the door") {
        document.getElementById("text").innerHTML = "You step forward and knock on the door, the man looks at you suspiciously";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Attack the gaurds") {
        window.location.href = './died.html';
    } else if (choice == "Try to enter") {
        document.getElementById("text").innerHTML = "You begin walking towards the armed gaurds, who all turn to look at you, scowling";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Rob the antique store") {
        document.getElementById("text").innerHTML = "You run into the store and try to rob it";
        displayNoneList();
        setTimeout(businessCard, 2000);
    } else if (choice == "Ask to use charger") {
        document.getElementById("text").innerHTML = "You ask the owner if you can use the charger";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Leave") {
        document.getElementById("text").innerHTML = "You leave";
        displayNoneList();
        setTimeout(leave, 2000);
    } else {
        document.getElementById("text").innerHTML = "Please select an option";
    }
}

//add all user choices to if statement
function pieceOfPaper() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "The Piece of paper has a name written on it, George Hungus, after several hours asking strangers for directions. You arrive at the persons address. There is a man leaning against the wall next to the door, do you...";
    document.getElementById("option1").innerHTML = "Talk to the man";
    document.getElementById("option2").innerHTML = "Knock on the door";
    document.getElementById("option3").innerHTML = "Leave";
}

function businessCard() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "The Business Card has an address written on it, after several hours asking strangers for directions. You arrive at the address. It's an unimaginably tall skycraper with armed guards standing outside, do you...";
    document.getElementById("option1").innerHTML = "Attack the gaurds";
    document.getElementById("option2").innerHTML = "Try to enter";
    document.getElementById("option3").innerHTML = "Leave";
}

function mobilePhone() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "After wandering around the city for a few hours, asking people if they have a charger(it's an ancient 2020 model phone). You find an antique shop that sells it";
    document.getElementById("option1").innerHTML = "Rob the antique store";
    document.getElementById("option2").innerHTML = "Ask to use charger";
    document.getElementById("option3").innerHTML = "Leave";
}

function leave(){
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "Well... I guess I could try one of the other options..";
    document.getElementById("option1").innerHTML = "Piece of paper";
    document.getElementById("option2").innerHTML = "Business card";
    document.getElementById("option3").innerHTML = "Mobile phone";
}



//add end page with play again options. 

