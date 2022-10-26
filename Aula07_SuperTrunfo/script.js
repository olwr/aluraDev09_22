// card decks
const cards = [
    {
        name: "Hawkguy",
        img: "cards-imgs/clint.png",
        frame: "silver",
        attributes: {
            attack: 8,
            deffence: 3,
            magic: 2
        }
    },
    {
        name: "Ladyhawk",
        img: "cards-imgs/4.png",
        frame: "gold",
        attributes: {
            attack: 8,
            deffence: 5,
            magic: 4
        }
    },
    {
        name: "White Widow",
        img: "cards-imgs/4.png",
        frame: "silver",
        attributes: {
            attack: 10,
            deffence: 8,
            magic: 0
        }
    },
    {
        name: "Scarlet Witch",
        img: "cards-imgs/4.png",
        frame: "wood",
        attributes: {
            attack: 7,
            deffence: 7,
            magic: 10
        }
    },
    {
        name: "Winter Soldier",
        img: "cards-imgs/4.png",
        frame: "silver",
        attributes: {
            attack: 10,
            deffence: 8,
            magic: 3
        }
    },
    {
        name: "Black Widow",
        img: "cards-imgs/4.png",
        frame: "gold",
        attributes: {
            attack: 10,
            deffence: 9,
            magic: 5
        }
    },
    {
        name: "America Chavez",
        img: "cards-imgs/4.png",
        frame: "wood",
        attributes: {
            attack: 8,
            deffence: 6,
            magic: 9
        }
    },
    {
        name: "Spiderman",
        img: "cards-imgs/4.png",
        frame: "wood",
        attributes: {
            attack: 10,
            deffence: 8,
            magic: 6
        }
    },
    {
        name: "Daredevil",
        img: "cards-imgs/4.png",
        frame: "gold",
        attributes: {
            attack: 9,
            deffence: 8,
            magic: 3
        }
    },
    {
        name: "Iron Fist",
        img: "cards-imgs/4.png",
        frame: "gold",
        attributes: {
            attack: 8,
            deffence: 7,
            magic: 7
        }
    }
];

const frameColors = {
    silver: "cards-imgs/1.png",
    wood: "cards-imgs/2.png",
    gold: "cards-imgs/3.png"
}

//

var playerCard;
var cpuCard;
var gameCards;

var score = [0, 0, 0];  // 0 = player, 1 = player, 2 = tie
showScore();

var tagId = ["Player", "Cpu"];
var cardId = ["player-card", "cpu-card"];  // html ids card position
hideCard(cardId[0]);
hideCard(cardId[1]);
// shows card verso

playButton();

// play button 
function playButton() {
    var form = document.querySelector("form");
    var container = document.createElement("div");
    container.setAttribute = ("id", "btn-play-div");
    form.appendChild(container);
    var button = document.createElement("button");
    button.setAttribute("id", "btn-play")
    button.appendChild(document.createTextNode("Play"));
    container.appendChild(button);
}

// verse cards
function initialCard(id) {
    var options = document.querySelector("#id");
    var optionsText = "<img src='cards-imgs/4.png' style=' width: inherit; height: inherit; position: absolute;'>";
    options.innerHTML = optionsText;
}

// score
function showScore() {
    var showScore0 = document.querySelector("#score1");
    showScore0.innerHTML = score[0];
    var showScore1 = document.querySelector("#score2");
    showScore1.innerHTML = score[1];
}

function drawCard() {
    initialCard(cardId[1]);

    playButton();

    var elementResult = document.querySelector("#result");
    elementResult.innerHTML = "";

    var playerNumber = parseInt(Math.random() * cards.length);
    playerCard = cards[playerNumber];

    var cpuNumer = parseInt(Math.random() * cards.length);

    while (cpuNumer == playerNumber) {
        var cpuNumer = parseInt(Math.random() * cards.length);
    }

    cpuCard = cards[cpuNumer];

    cardsGame = [playerCard, cpuCard];

    document.querySelector("btn-draw").disabled = true;

    showCards(tagId[0], cardId[0], 0, 0, 0);
}

function showCards(tagId, cardId, iD, game, selectAttributes) {
    var divCard = document.querySelector("cardId");
    divCard.style.backgroundImage = `url(${cardsGame[iD].img})`;
}


