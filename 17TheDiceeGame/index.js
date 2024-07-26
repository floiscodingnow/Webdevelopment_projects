function randomDiceImg(number){
    if (number === 1){
        var dice = "./images/dice1.png";
    }
    else if (number === 2){
        var dice = "./images/dice2.png";
    }
    else if (number === 3){
        var dice = "./images/dice3.png";
    }
    else if (number === 4){
    var dice = "./images/dice4.png";
    }
    else if (number === 5){
    var dice = "./images/dice5.png";
    }
    else if (number === 6){
    var dice = "./images/dice6.png";
    }

    return dice;
}

var randomNumber = Math.floor(Math.random()*6)+1;
var randomNumber1 = Math.floor(Math.random()*6)+1;

if(randomNumber<randomNumber1){
    document.querySelector("h1").innerHTML="Santiago gewinnt"
}
else if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="Pascal gewinnt"
}else{
    document.querySelector("h1").innerHTML="Unentschieden"
}


document.querySelector("img").setAttribute("src", randomDiceImg(randomNumber));
document.getElementsByTagName("img")[1].setAttribute("src", randomDiceImg(randomNumber1));
