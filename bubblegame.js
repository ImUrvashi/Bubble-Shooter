
// 7. bubble game

var timer = 60;
var timerelem = document.querySelector('#timerelement');
var hitelem = document.querySelector('#hitelement');
var btmpnl = document.querySelector('#bottompanel');
var scoreElem = document.querySelector('#scoreelem');
var score = 0;

var guessnumber;

setInterval(() => {
    if (timer > 0) {
        --timer;
        timerelem.textContent = timer;
    }
    else {
        btmpnl.innerHTML = '<h1 id="centre"> Game Over </h1>';
    }
}, 1000);

function makeBubbles() {
    for (i = 0; i < 160; i++) {
        var randomnumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${randomnumber}</div>`;
        btmpnl.innerHTML += template;
    }
}

function getNewGuess() {
    // gets a random no.
    guessnumber = Math.floor(Math.random() * 10);
    // place random no. into the hit box;
    hitelem.textContent = guessnumber;
}

btmpnl.addEventListener('click', function (details) {

    var clickedbubblevalue = details.target.textContent;

    if (guessnumber == clickedbubblevalue) {
        score = score + 10;
        scoreElem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    }
    else {
        console.log('glt click hua');
    }

})

getNewGuess();
makeBubbles();

