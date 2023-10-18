/* ID's and CLASSES THAT DO NOT NEED CSS? */

/*  */
/* id openingSection */
/* id intro */
/* id startBtn */

/* id quizSection */
/* id timer */
/* id question */
// id choices
/* class choiceBtn */
/* id's choice1, 2, 3, 4 */

/* id endingSection */
/* id score */
/* id initials */
/* id saveBtn */

/* id scoresSection */
/* id highScores */
/* id restartBtn */
/* id clearBtn */


// PSEUDOCODE
// create variables
// create array for questions and answers
// create function for timer
// create function for displaying questions
// create function for saving a score
// create function for displaying all highscores

var openingEL = document.getElementById("openingSection");
var introEL = document.getElementById("intro");
var startBtnEL = document.getElementById("startBtn");

var quizEL = document.getElementById("quizSection");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
// variables for choice1, 2, 3, 4?

var endingEL = document.getElementById("endingSection");
var scoreEl = document.getElementById("score");
var initialsEl = document.getElementById("initials");
var saveBtnEl = document.getElementById("saveBtn");

var scoresEL = document.getElementById("scoresSection");
var highScoresEl = document.getElementById("highScores");
var restartBtnEl = document.getElementById("restartBtn");
var clearBtnEl = document.getElementById("clearBtn");

scoreEl = 0;


// timer function
var secondsLeft = 60;

function setTime() {

timerEl.textContent = secondsLeft + " seconds left.";

var timerInterval = setInterval( function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
    }
}, 1000)

}

startBtnEL.addEventListener("click", function(){
    setTime();
})

// 