

function onUserInput(){
    let choice = document.getElementById('choice').value;
    return choice;
}

//figure out how to reuse userchoice button for different questions
function userChoice(){
   let choice = onUserInput();
   if (choice == "Piece of paper"){
        document.getElementById("text").innerHTML = "You picked a piece of paper";
        setTimeout(pieceOfPaper, 2000);
   } else if (choice == "Business card"){
        document.getElementById("text").innerHTML = "You picked the business card";
        setTimeout(businessCard, 2000);
   } else if (choice == "Mobile phone"){
        document.getElementById("text").innerHTML = "You picked the mobile phone";
        setTimeout(mobilePhone, 2000);
   } else {
        document.getElementById("text").innerHTML = "Please select an option";
   }
}


//add all user choices to if statement
function pieceOfPaper(){
    document.getElementById("text").innerHTML = "The Piece of paper has an address written on it, after several hours asking strangers for directions. You arrive at the address. There is a man leaning against the wall next to the door, do you...";
    document.getElementById("option1").innerHTML = "Talk to the man";
    document.getElementById("option2").innerHTML = "Knock on the door";
    document.getElementById("option3").innerHTML = "Leave";
}

function businessCard(){
    document.getElementById("text").innerHTML = "The Business Card has an address written on it, after several hours asking strangers for directions. You arrive at the address. It's an unimaginably tall skycraper with armed gaurds standing outside, do you...";
    document.getElementById("option1").innerHTML = "Attack the Gaurds";
    document.getElementById("option2").innerHTML = "Try to enter";
    document.getElementById("option2").innerHTML = "Leave";
}

function mobilePhone(){
    document.getElementById("text").innerHTML = "After wandering around the city for a few hours, asking people if they have a charger(it's an ancient 2020 model phone). You find an antique shop ";
    document.getElementById("option1").innerHTML = "Talk to the man";
    document.getElementById("option2").innerHTML = "Knock on the door";
    document.getElementById("option2").innerHTML = "Leave";
}

//add end page with play again options. 

