
var questions = ["Question 1: How many Pokemon are in the first generation?", 
"Question 2: Who is the main character in the TV Series?", 
"Question 3: Which Pokemon is considered to be the main Pokemon of the series?", 
"Question 4: What is that Pokemon's type?", 
"Question 5: What is the name of the original 'bad guys' in the series?", 
"Question 6: Who is the first legendary Pokemon to make an appearance in the TV Series?"];

// holding the setInterval
var showQuestion;

// keep track of the index
var count = 0;

// Variables to log correct, incorrect and unanswered
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// States if the answer is correct or not
var correctState = null;

//Holds stop variable
var stopVariable = 0;


// Timers
// timer num
var number = 6;

// holding timer setInterval
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// Decrement function.
function decrement() {

    number--;

    //  Display Number
    $("#show-number").html("<h2> timer: " + number + "</h2>");

    if (number > 5) {
        $("#show-number").html("<h2> timer: " + "0" + "</h2>");
    }
    else if (number === 1) {
        number += 5
    }
    if (count === questions.length) {

        clearInterval(intervalId);
        stop();
        $("#show-number").html("<h2>timer: " + "" + "</h2>");
    }
}

function stop() {
    //  Clears intervalId
    clearInterval(intervalId);
}

if (stopVariable = 1) {
    stop();
}

function startGame() {
    $( "#start" ).remove();
    clearInterval(showQuestion);
    showQuestion = setInterval(nextQuestion, 6000);

}

function stopGame() {
    stop();
    clearInterval(showQuestion);
    clearInterval(nextQuestion);
    clearInterval(intervalId);
    clearInterval(decrement);
    clearInterval(run);
}

function restartGame() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    correctState = null;

    number = 6;
    count = 0;

    startGame();
    displayQuestion();
    $( "#restart" ).remove();
}

// click functions
$("#start").click(startGame);
$("#start").click(displayQuestion);
$("#stop").click(stop);
$("#restart").click(restartGame);

function displayQuestion() {
    $("#questionHolder").html(questions[count]);
    run();

    // display questions
    if (count === 5) {

        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '1' > Ho-oh" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Lugia" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > Mewtwo" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Mew" + "</label>" + "<br>" + " </form> ");
    }
    else if (count === 4) {

        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Pokehunters" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Team Magma" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '1' > Team Rocket" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Team Skull" + "</label>" + "<br>" + " </form> ");


    }

    else if (count === 3) {

        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Water" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Fire" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > Grass" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '1' > Electric" + "</label>" + "<br>" + " </form> ");
    }

    else if (count === 2) {

        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '1' > Pikachu" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Squirtle" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > Charizard" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Bulbasaur" + "</label>" + "<br>" + " </form> ");
    }
    else if (count === 1) {

        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > Red" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '1' > Ash" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > Blue" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '2' > Gary" + "</label>" + "<br>" + " </form> ");
    }
    else if (count === 0) {

        $("#questionHolder").append(" <form> " +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > 150" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_1' name='radiobtn' value = '2' > 100" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_2' name='radiobtn' value = '2' > 251" + "</label>" + "<br>" +
            "<label>" + "<input type='radio' id='q1_radio_3' name='radiobtn' value = '1' > 151" + "</label>" + "<br>" + " </form> ");
    }

}

function nextQuestion() {

    // these are statements that log correct / incorrect answers
    var answerArr = ["151", "Ash", "Pikachu", "Electric", "Team Rocket", "Ho-oh"];
    var answerVar = answerArr[count];

    var radioValue = $("input[name='radiobtn']:checked").val();

    console.log(radioValue)

    if (radioValue) {

        if (radioValue === "2") {

            incorrect++;
            correctState = 0;
            $("#questionHolder").html("incorrect! the answer was " + answerVar + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);

        }
        else if (radioValue === "1") {

            correct++;
            correctState = 1;
            $("#questionHolder").html("correct! the answer was " + answerVar + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);
        }
    }
    else {
        incorrect++
        unanswered++
        correctState = 0;
        $("#questionHolder").html("incorrect! the answer was " + answerVar + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);
    }

    run();

    //  Increase the count
    count++;

    $("#show-number").html("<h2> timer: " + "0" + "</h2>");

    // time the question is displayed
    setTimeout(displayQuestion, 1000);

    if (count === questions.length) {

        $("#questionHolder").html("FINAL SCORE" + "<br>" + "correct: " + correct + "<br>" + "incorrect: " + incorrect + "<br>" + "unanswered: " + unanswered);

        stopGame();

        $("#restartDiv").append( '<button id= "restart" class = "btn btn-success"> <i class="fa fa-circle-o" style="color:yellow;" aria-hidden="true"></i> RESTART <i class="fa fa-circle-o" style="color:yellow;" aria-hidden="true"></i></button> ' )
        $("#restart").click(restartGame);
    }
}















