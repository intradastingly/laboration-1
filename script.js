

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
        document.getElementById("text").innerHTML = "You take the piece of paper out of your pocket and read it";
        displayNoneList();
        setTimeout(pieceOfPaper, 2000);
    } else if (choice == "Business card") {
        document.getElementById("text").innerHTML = "You take the business card out of your pocket and read it";
        displayNoneList();
        setTimeout(businessCard, 2000);
    } else if (choice == "Mobile phone") {
        document.getElementById("text").innerHTML = "You try to turn on the phone but the battery is dead";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Talk to the man") {
        document.getElementById("text").innerHTML = "Why hello there, good sir! Would you by any chance happen to know who George Hungus is?";
        displayNoneList();
        setTimeout(talkToTheMan, 4000);
    } else if (choice == "Knock on the door") {
        document.getElementById("text").innerHTML = "You step forward and knock on the door";
        displayNoneList();
        setTimeout(knockOnTheDoor, 2000);
    } else if (choice == "Attack the gaurds") {
        window.location.href = './died.html';
    } else if (choice == "Try to enter") {
        document.getElementById("text").innerHTML = "You begin walking towards the armed gaurds, who all turn to look at you, scowling";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Rob the antique store") {
        window.location.href = './died.html';
    } else if (choice == "Ask to use charger") {
        document.getElementById("text").innerHTML = "You ask the owner if you can use the charger";
        displayNoneList();
        setTimeout(mobilePhone, 2000);
    } else if (choice == "Yes") {
        document.getElementById("text").innerHTML = "You join the party";  
        setTimeout(function(){location.href="start.html", 4000})//starts too quickly?
    } else if (choice == "No") {
        document.getElementById("text").innerHTML = "You wander around the bar asking the patrons who George Hungus might be, one of them, an 80% cyborg/slash humanoid says that he's just stepped out for some fresh air. You go back outside.";
        setTimeout(backOutside, 4000);     
    } else if (choice == "Leave") {
        document.getElementById("text").innerHTML = "You leave";
        displayNoneList();
        setTimeout(leave, 2000);
    } else {
        document.getElementById("text").innerHTML = "Please select an option";
    }
}

//add all user choices to if statement

//first choice iteraion
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
//first choice iteraion

//second choice iteration
function talkToTheMan() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "The Piece of paper has a name written on it, George Hungus, after several hours asking strangers for directions. You arrive at the persons address. There is a man leaning against the wall next to the door, do you...";
    document.getElementById("option1").innerHTML = "Talk to the man";
    document.getElementById("option2").innerHTML = "Knock on the door";
    document.getElementById("option3").innerHTML = "Leave";
}

function knockOnTheDoor() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "Turns out that the address people had been pointing you to was a secret bar, there is some kind of party happening, space booze on the house";
    document.getElementById("option1").innerHTML = "Yes";
    document.getElementById("option2").innerHTML = "No";
}

function TryToEnter() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "After wandering around the city for a few hours, asking people if they have a charger(it's an ancient 2020 model phone). You find an antique shop that sells it";
    document.getElementById("option1").innerHTML = "Rob the antique store";
    document.getElementById("option2").innerHTML = "Ask to use charger";
    document.getElementById("option3").innerHTML = "Leave";
}

function AskToUseCharger() {
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "After wandering around the city for a few hours, asking people if they have a charger(it's an ancient 2020 model phone). You find an antique shop that sells it";
    document.getElementById("option1").innerHTML = "Rob the antique store";
    document.getElementById("option2").innerHTML = "Ask to use charger";
    document.getElementById("option3").innerHTML = "Leave";
}
//second choice iteration

//third choice iteration 

function backOutside() {

}

//Leave loop to first question series option
function leave(){
    document.querySelector('ul').style.display = "flex";
    document.getElementById("text").innerHTML = "Well... I guess I could try one of the other options..";
    document.getElementById("option1").innerHTML = "Piece of paper";
    document.getElementById("option2").innerHTML = "Business card";
    document.getElementById("option3").innerHTML = "Mobile phone";
}



//add end page with play again options. 

