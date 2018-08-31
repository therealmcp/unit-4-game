var randNum, userTotal;
var wins = 0, losses = 0;

var checkGameState = function() {
    // User wins if they hit the random number without going over
    if (userTotal === randNum) {
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
    }

    // User loses if they go over the random number
    if (userTotal > randNum) {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
    }
}

$(document).ready(function() {
    
    // Create random number between 19-120 to be displayed to user
    randNum = Math.floor(Math.random() * (120 - 19) + 19);

    console.log("randNum is: " + randNum);

    $("#random-number").text(randNum);

    // Display user's running total from clicking crystals
    userTotal = 0;

    $("#user-number").text(userTotal);

    // Create 4 crystals that each have a random value between 1-12 (values not displayed)
    var blueCryst = (Math.floor(Math.random() * (12 - 1) + 1));
    var yelCryst = (Math.floor(Math.random() * (12 - 1) + 1));
    var greenCryst = (Math.floor(Math.random() * (12 - 1) + 1));
    var redCryst = (Math.floor(Math.random() * (12 - 1) + 1));

    $("#bluecrystal").on("click", function() { 
        userTotal += blueCryst;
        $("#user-number").text(userTotal);
        console.log("blue: " + blueCryst);
        checkGameState();
        });

    $("#yellowcrystal").on("click", function() { 
        userTotal += yelCryst;
        $("#user-number").text(userTotal);
        console.log("yellow: " + yelCryst);
        checkGameState();
        });

    $("#greencrystal").on("click", function() { 
        userTotal += greenCryst;
        $("#user-number").text(userTotal);
        console.log("green " + greenCryst);
        checkGameState();
        });

    $("#redcrystal").on("click", function() { 
        userTotal += redCryst;
        $("#user-number").text(userTotal);
        console.log("red " + redCryst);
        console.log("user total: " +userTotal);
        checkGameState();
        });
  
});