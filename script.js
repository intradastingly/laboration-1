const userInput = document.getElementById('choice');
const buttonClick = document.getElementById('buttonConfirm');

/** calls the text input function without leaving javascript on main html page. */
userInput.oninput = function() {
    onUserInput();
}

/**
 * @returns {user choice} returns the text that the user input into input box.
 */
function onUserInput(){
    const choice = document.getElementById('choice').value;
        return choice;
        console.log(choice);
}

/** removes the unordered list from DOM.*/
function displayNoneList() {
    document.querySelector('ul').style.display = "none";
}

/** Adds the unordered list to DOM.*/
function displayList() {
    document.querySelector('ul').style.display = "flex";
}

/**  
 * Takes text input from input box and applies if else statement to the value upon button confirm.
 * All possible user choices are contained within the function.
 * setTimeout function is set on the pre execution of proceeding functions to give user time to read the text.
*/
buttonClick.onclick = function() {
    const choice = onUserInput();
    displayNoneList()
    if (choice == "Piece of paper") {
        document.getElementById("text").innerHTML = "You take the piece of paper out of your pocket and read it";
        setTimeout(pieceOfPaper, 2000);
    } else if (choice == "Business card") {
        document.getElementById("text").innerHTML = "You take the business card out of your pocket and read it";
        setTimeout(businessCard, 2000);
    } else if (choice == "Mobile phone") {
        document.getElementById("text").innerHTML = "You try to turn on the phone but the battery is dead";
        setTimeout(antiqueStore, 2000);
    } else if (choice == "Talk" || choice == "Call number") {
        document.getElementById("text").innerHTML = "You talk to the man";
        setTimeout(talkToTheMan, 2000);
    } else if (choice == "Knock on door") {
        document.getElementById("text").innerHTML = "You step forward and knock on the door";
        setTimeout(knockOnTheDoor, 2000);
    } else if (choice == "Enter building") {
        document.getElementById("text").innerHTML = "You begin walking towards the armed gaurds, who all turn to look at you, scowling";
        setTimeout(enterBuilding, 2000);
    } else if (choice == "Charge phone") {
        document.getElementById("text").innerHTML = "You ask the owner if you can use the charger";
        setTimeout(chargePhone, 2000);
    } else if (choice == "Yes" || choice == "Sure") {
        document.getElementById("text").innerHTML = "PARTY TIME!!!";
        setTimeout(function () { location.href = "index.html" }, 3000)
    } else if (choice == "No") {
        document.getElementById("text").innerHTML = "You wander around the bar asking the patrons who George Hungus might be, one of them, an 80% cyborg/slash humanoid says that he's just stepped out for some fresh air. You go back outside and talk to George Hungus.";
        setTimeout(talkToTheMan, 6000);
    } else if (choice == "Leave") {
        document.getElementById("text").innerHTML = "You leave";
        setTimeout(leave, 2000);
    } else if (choice == "Nah") {
        win();
    } else if (choice == "Steal charger" || choice == "Attack the gaurds" || choice == "Jump out window") {
        window.location.href = './died.html';
    } else {
        document.getElementById("text").innerHTML = "Not a valid choice, please try again";
        displayList()
    }
}

/** Winning function executes if final user input corresponds, 
 * removes DOM buttons and input, allows user to restart game. 
 * */
function win(){
    displayNoneList()
    document.getElementById("text").innerHTML = "Congratulations, Player420.6969, you've escaped the infinite hangover death loop, you should feel proud of yourself! Would you like to play again? ";
    document.getElementById('buttonConfirm').style.display = "none";
    document.getElementById('choice').style.display = "none";
    document.getElementById("buttonRestart").innerHTML = "Play again";
}

//first choice iteraion
/** Changes DOM based on user input to paper sequence.*/
function pieceOfPaper() {
    displayList()
    document.getElementById("text").innerHTML = "The Piece of paper has a name written on it, George Hungus, after several hours asking strangers for directions. You arrive at the persons address. There is a man leaning against the wall next to the door, do you...";
    document.getElementById("option1").innerHTML = "Talk";
    document.getElementById("option2").innerHTML = "Knock on door";
    document.getElementById("option3").innerHTML = "Leave";
}

/** Changes DOM based on user input to business card sequence.*/
function businessCard() {
    displayList()
    document.getElementById("text").innerHTML = "The Business Card has an address and the name George Hungus printed on it, after several hours asking strangers for directions. You arrive at the address. It's an unimaginably tall skycraper with armed guards standing outside, do you...";
    document.getElementById("option1").innerHTML = "Attack the gaurds";
    document.getElementById("option2").innerHTML = "Enter building";
    document.getElementById("option3").innerHTML = "Leave";
}

/** Changes DOM based on user input to mobile phone sequence.*/
function mobilePhone() {
    displayList()
    document.getElementById("text").innerHTML = "After wandering around the city for a few hours, asking people if they have a charger(it's an ancient 2020 model phone). You find an antique shop that sells it";
    document.getElementById("option1").innerHTML = "Rob the antique store";
    document.getElementById("option2").innerHTML = "Ask to use charger";
    document.getElementById("option3").innerHTML = "Leave";
}
//first choice iteraion

//second choice iteration
/** Continuation of piece of paper sequence.*/
function knockOnTheDoor() {
    displayList()
    document.getElementById('option3').style.display = "none";
    document.getElementById("text").innerHTML = "An obviously drunk man opens the door and welcomes you in. Turns out that the address people had been pointing you to was a secret bar, there is some kind of party happening, space booze on the house!!! Have one drink?";
    document.getElementById("option1").innerHTML = "Yes";
    document.getElementById("option2").innerHTML = "No";
}

/** Continuation of business card sequence.*/
function enterBuilding() {
    displayList()
    document.getElementById("text").innerHTML = "You manage to get past the gaurds, unsure of what to do you ask to see the owner of the building at the reception desk, the receptionist directs you to managers office on the top floor. You exit the elevator and enter the office of George Hungus"; document.getElementById("option1").innerHTML = "Yes";
    document.getElementById("option1").innerHTML = "Talk";
    document.getElementById("option2").innerHTML = "Jump out window";
    document.getElementById("option3").innerHTML = "Leave";
}

/** Continuation of mobile phone sequence.*/
function antiqueStore() {
    displayList()
    document.getElementById("text").innerHTML = "After wandering around the city for a few hours, asking people if they have a charger(it's an ancient 2020 model phone). You find an antique shop that carries the charger you need";
    document.getElementById("option1").innerHTML = "Steal charger";
    document.getElementById("option2").innerHTML = "Charge phone";
    document.getElementById("option3").innerHTML = "Leave";
}
//second choice iteration

//third choice iteration 
/** Continuation of mobile phone sequence.*/
function chargePhone() {
    displayList()
    document.getElementById('option3').style.display = "none";
    document.getElementById("text").innerHTML = "The store owner is an incredibly pleasant Alien type of creature who of course lets you use the charger for your phone. You wait patiently as it charges, once it's charged you turn it on only to find that you have a single contact, George Hungus";
    document.getElementById("option1").innerHTML = "Call number";
    document.getElementById("option2").innerHTML = "Leave";
}

/** Final sequence if Nah selected game won, if not restarted.*/
function talkToTheMan() {
    displayList()
    document.getElementById('option3').style.display = "none";
    document.getElementById("text").innerHTML = "Are you George Hungus? you ask the man. It takes a moment but finally he recognizes you... Player420.6969, is that you??? I've been looking for you all over! I've been wanting to take you up on your offer for a drink, what do you say?";
    document.getElementById("option1").innerHTML = "Sure";
    document.getElementById("option2").innerHTML = "Nah";
}

//Leave loop to first question series 
/** If leave is input by user, the function loops back and the user can restart a different answer line.*/
function leave() {
    displayList()
    document.getElementById("text").innerHTML = "Well... I guess I could try one of the other options..";
    document.getElementById("option1").innerHTML = "Piece of paper";
    document.getElementById("option2").innerHTML = "Business card";
    document.getElementById("option3").innerHTML = "Mobile phone";
}


