$(document).ready(function() {
    
    // Create random number between 19-120 to be displayed to user
    var randNum = Math.floor(Math.random() * (120 - 19) + 19);

    console.log(randNum);

    $("#random-number").text(randNum);

    // Display user's running total from clicking crystals
    var userTotal = 0;

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
        });

    $("#yellowcrystal").on("click", function() { 
        userTotal += yelCryst;
        $("#user-number").text(userTotal);
        console.log("yellow: " + yelCryst);
        });

    $("#greencrystal").on("click", function() { 
        userTotal += greenCryst;
        $("#user-number").text(userTotal);
        console.log("green " + greenCryst);
        });

    $("#redcrystal").on("click", function() { 
        userTotal += redCryst;
        $("#user-number").text(userTotal);
        console.log("red " + redCryst);
        });

    // User wins if they hit the random number without going over
    if (userTotal === randNum) {
        alert("You Win!");
        wins++;
    }

    // User loses if they go over the random number
    if (userTotal > randNum) {
        alert("You lose!");
    }
    

});