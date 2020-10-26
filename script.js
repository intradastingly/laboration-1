

function onUserInput(){
    let choice = document.getElementById('choice').value;
    return choice;
}

function userChoice(){
   let number = onUserInput();
   if (number == 1){
        document.getElementById("text").innerHTML = "you picked a piece of paper";
        setTimeout(choice1, 2000);
   } else if (number == 2){
        document.getElementById("text").innerHTML = "you picked the business card";
        setTimeout(choice2, 2000);
   } else if (number == 3){
        document.getElementById("text").innerHTML = "you picked the mobile phone";
        setTimeout(choice3, 2000);
   } else {
        document.getElementById("text").innerHTML = "please pick 1, 2 or 3";
   }
}

function choice1(){
    document.getElementById("text").innerHTML = "The Piece of paper has an address written on it, after walking through the city for several hours asking strangers for directions. You arrive at the address. There is a man leaning against the wall next to the door, do you...";
    console.log("you picked a piece of paper")
}

function choice2(){
    document.getElementById("text").innerHTML = "you picked a piece of paper";
    console.log("business card")

}

function choice3(){
    document.getElementById("text").innerHTML = "you picked a piece of paper";
    console.log("piece of paper")
}