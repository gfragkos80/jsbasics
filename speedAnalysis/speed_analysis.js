let testText;
let startTime, endTime;


function startTest() {
    // Set the test text
    testText = "The quick brown fox jumps over the lazy dog.";
    document.getElementById("inputText").value = testText;

    // Enable text input
    document.getElementById("userInput").readOnly = false;
    // Clear text input field
    document.getElementById("userInput").value = '';
    

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    testText ='';

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    // The phrase is spitted into words with \s+ char. Then the array is filtered
    // through all words which are not null. then the remaining array length is caclulated
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;
    var typedchars = userTypedText.length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        //Words per minute calculation
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Character Typed: " + typedchars + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}