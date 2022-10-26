var shepard = { name: "Commander", victories: 3, ties: 1, defeats: 6, points: 0 };
var lara = { name: "RaiderOfTombs", victories: 2, ties: 1, defeats: 7, points: 0 };
var altair = { name: "HiddenOne", victories: 4, ties: 1, defeats: 5, points: 0 };

function calculatePoints(player) {
    var points = player.victories * 3 + player.ties;
    return points;
}

shepard.points = calculatePoints(shepard);
lara.points = calculatePoints(lara);
altair.points = calculatePoints(altair);

var players = [shepard, lara, altair];

function showPlayersOnScreen(players) {
    var element = "";
    for (var i = 0; i < players.length; i++) {
        element += "<tr><td>" + players[i].name + "</td>";
        element += "<td>" + players[i].victories + "</td>";
        element += "<td>" + players[i].ties + "</td>";
        element += "<td>" + players[i].defeats + "</td>";
        element += "<td class='points'>" + players[i].points + "</td>";
        element += "<td><button class='w' onClick='addVictory(" + i + ")'>Victory</button></td>";
        element += "<td><button class='t' onClick='addTie(" + i + ")'>Tie</button></td>";
        element += "<td><button class='d' onClick='addDefeat(" + i + ")'>Defeat</button></td>";
        element += "</tr>";
    }

    var playerTable = document.querySelector("tbody");
    playerTable.innerHTML = element;
}

showPlayersOnScreen(players);

function addVictory(i) {
    var player = players[i];
    player.victories++;
    player.points = calculatePoints(player);
    showPlayersOnScreen(players);
}

function addTie(i) {
    var player = players[i];
    player.ties++;
    player.points = calculatePoints(player);
    showPlayersOnScreen(players);
}

function addDefeat(i) {
    var player = players[i];
    player.defeats++;
    showPlayersOnScreen(players);
}


