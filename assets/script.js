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

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correctIndex: 2
    },
    {
        question: `The condition in an if / else statement is enclosed within ______.`,
        answers: [
            `quotes`,
            `curly brackets`,
            `parentheses`,
            `square brackets`,
        ],
        correctIndex: 2
    },
    {
        question: "Arrays in Javascript can be used to store ________.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        correctIndex: 3
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses",
        ],
        correctIndex: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "Javascript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        correctIndex: 3
    },
];



// timer function
var secondsLeft = 60;

function setTime() {

timerEl.textContent = secondsLeft + " seconds left.";

var timerInterval = setInterval( function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        quizEL.style.display = "none";
    }
}, 1000)

}

startBtnEL.addEventListener("click", function(){
    setTime();
})

