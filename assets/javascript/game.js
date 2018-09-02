var randNum, userTotal;
var wins = 0, losses = 0;

// Create 4 crystals that each have a random value between 1-12 (values not displayed)
var blueCryst = (Math.floor(Math.random() * (12 - 1) + 1));
var yelCryst = (Math.floor(Math.random() * (12 - 1) + 1));
var greenCryst = (Math.floor(Math.random() * (12 - 1) + 1));
var redCryst = (Math.floor(Math.random() * (12 - 1) + 1));

var checkGameState = function() {
    // User wins if they hit the random number without going over
    if (userTotal === randNum) {
        alert('You win!');
        wins++;
        $("#wins").text(wins);
        setTimeout("reset()", 500);
    }

    // User loses if they go over the random number
    if (userTotal > randNum) {
        alert('Bummer, bruh. Try again!');
        losses++;
        $("#losses").text(losses);
        setTimeout("reset()", 500);
    }
}

var reset = function() {
    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#random-number").text(randNum);
    userTotal = 0;
    $("#user-number").text(userTotal);
    blueCryst = (Math.floor(Math.random() * (12 - 1) + 1));
    yelCryst = (Math.floor(Math.random() * (12 - 1) + 1));
    greenCryst = (Math.floor(Math.random() * (12 - 1) + 1));
    redCryst = (Math.floor(Math.random() * (12 - 1) + 1));
}

$(document).ready(function() {
    
    // Create random number between 19-120 to be displayed to user
    randNum = Math.floor(Math.random() * (120 - 19) + 19);

    $("#random-number").text(randNum);

    // Display user's running total from clicking crystals
    userTotal = 0;

    $("#user-number").text(userTotal);

    $("#bluecrystal").on("click", function() { 
        userTotal += blueCryst;
        $("#user-number").text(userTotal);
        checkGameState();
        });

    $("#yellowcrystal").on("click", function() { 
        userTotal += yelCryst;
        $("#user-number").text(userTotal);
        checkGameState();
        });

    $("#greencrystal").on("click", function() { 
        userTotal += greenCryst;
        $("#user-number").text(userTotal);
        checkGameState();
        });

    $("#redcrystal").on("click", function() { 
        userTotal += redCryst;
        $("#user-number").text(userTotal);
        checkGameState();
        });
  
});