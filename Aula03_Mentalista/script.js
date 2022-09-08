// cpu secret number //
var cpuNumber = parseInt(Math.random() * (15 - 0) + 0);

// player attempts //
var attempts = document.querySelector(".attempts");
var attemptsCount = 0;
var maxAttempts = 3;
var guesses = 2;

document.querySelector(".play").onclick = function play() {
    // player number //
    var playerInput = document.querySelector("input").value;

    // player interface //
    var result = document.querySelector("h2");
    var playButton = document.querySelector(".play");

    // cpu vs player //
    if (cpuNumber == playerInput) {
        result.textContent = "It's a match!";
        playButton.disabled = true;
    } else if (playerInput < 0 || playerInput > 15) {
        result.textContent = "Invalid number, try again.";
    } else if (cpuNumber > playerInput) {
        result.textContent = "Hotter, the number is greater than " + playerInput;
    } else if (cpuNumber < playerInput) {
        result.textContent = "Colder, the number is less than " + playerInput;
    }
    
    if (attemptsCount != maxAttempts) {
        attempts.textContent = "You've " + guesses-- + " remaining chance(s)";
        maxAttempts--;
    } else if  (attemptsCount == maxAttempts) {
        attempts.textContent = "No more chances";
        playButton.disabled = true;
    }

    if (attemptsCount == maxAttempts && cpuNumber != playerInput) {
        result.textContent = "GAME OVER, the number was " + cpuNumber;
        attempts.textContent = "Drip drop, you lost!";
        playButton.disabled = true;
    }

    if (attemptsCount != maxAttempts && cpuNumber == playerInput) {
        attempts.textContent = "Dumb luck, I bet you can't beat me twice";
    }

    if (attemptsCount == maxAttempts && cpuNumber == playerInput) {
        attempts.textContent = "Dumb luck, I bet you can't beat me twice";
    }

    document.querySelector(".reset").onclick = function reset() {
        location.reload(true);
    }
}