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
var choiceBtnEl = document.getElementsByClassName("choiceBtn");


var endingEL = document.getElementById("endingSection");
var initialsEl = document.getElementById("initials");
var saveBtnEl = document.getElementById("saveBtn");

var scoresEL = document.getElementById("scoresSection");
var highScoresEl = document.getElementById("highScores");
var restartBtnEl = document.getElementById("restartBtn");
var clearBtnEl = document.getElementById("clearBtn");


// questions array

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "A: strings",
            "B: booleans",
            "C: alerts",
            "D: numbers",
        ],
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        answers: [
            "A: quotes",
            "B: curly brackets",
            "C: parentheses",
            "D: square brackets",
        ],
    },
    {
        question: "Arrays in Javascript can be used to store ________.",
        answers: [
            "A: numbers and strings",
            "B: other arrays",
            "C: booleans",
            "D: all of the above",
        ],
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            "A: commas",
            "B: curly brackets",
            "C: quotes",
            "D: parentheses",
        ],
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "A: Javascript",
            "B: terminal/bash",
            "C: for loops",
            "D: console.log"
        ],
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
        endingEL.style.display = "block";
    }
}, 1000)

}

// start button

startBtnEL.addEventListener("click", function(){
    setTime();
    displayQuestion1();
})

// start score counter

let score = 0;

// functions to display questions

// display question 1

function displayQuestion1() {
    quizEL.style.display = "block";
    openingEL.style.display = "none";

    question.textContent = questions[0].question;

    let choice0El = document.getElementById("choice0");
    let choice1El = document.getElementById("choice1"); 
    let choice2El = document.getElementById("choice2");
    let choice3El = document.getElementById("choice3");
   
    choice0El.textContent = questions[0].answers[0];
    choice1El.textContent = questions[0].answers[1];
    choice2El.textContent = questions[0].answers[2];
    choice3El.textContent = questions[0].answers[3];

    choice0El.onclick = function(){
        displayQuestion2();
    }
   
    choice1El.onclick = function(){
        displayQuestion2();
    }

    choice2El.onclick = function(){
        displayQuestion2();
        score++;

        
    }

    choice3El.onclick = function(){
        displayQuestion2();
    }

    }


// display question 2

function displayQuestion2() {
    quizEL.style.display = "block";
    openingEL.style.display = "none";

    question.textContent = questions[1].question;

    let choice0El = document.getElementById("choice0");
    let choice1El = document.getElementById("choice1"); 
    let choice2El = document.getElementById("choice2");
    let choice3El = document.getElementById("choice3");
   
   choice0El.textContent = questions[1].answers[0];
   choice1El.textContent = questions[1].answers[1];
   choice2El.textContent = questions[1].answers[2];
   choice3El.textContent = questions[1].answers[3];
   

    choice0El.onclick = function(){
        displayQuestion3();
    }

    choice1El.onclick = function(){
        displayQuestion3();
    }

    choice2El.onclick = function(){
        score++;
        displayQuestion3();
        
    }

    choice3El.onclick = function(){
        displayQuestion3();
    }   
    
    }   
    

    // display question 3

function displayQuestion3() {
    quizEL.style.display = "block";
    openingEL.style.display = "none";

    question.textContent = questions[2].question;

    let choice0El = document.getElementById("choice0");
    let choice1El = document.getElementById("choice1"); 
    let choice2El = document.getElementById("choice2");
    let choice3El = document.getElementById("choice3");
   
   choice0El.textContent = questions[2].answers[0];
   choice1El.textContent = questions[2].answers[1];
   choice2El.textContent = questions[2].answers[2];
   choice3El.textContent = questions[2].answers[3];
   
   choice0El.onclick = function(){
        displayQuestion4();
    }

    choice1El.onclick = function(){
        displayQuestion4();
    }

    choice2El.onclick = function(){
        displayQuestion4();
    }

    choice3El.onclick = function(){
        score++;
        displayQuestion4();
    } 

    }


    // display question 4

function displayQuestion4() {
    quizEL.style.display = "block";
    openingEL.style.display = "none";

    question.textContent = questions[3].question;

    let choice0El = document.getElementById("choice0");
    let choice1El = document.getElementById("choice1"); 
    let choice2El = document.getElementById("choice2");
    let choice3El = document.getElementById("choice3");
   
   choice0El.textContent = questions[3].answers[0];
   choice1El.textContent = questions[3].answers[1];
   choice2El.textContent = questions[3].answers[2];
   choice3El.textContent = questions[3].answers[3];
   
    choice0El.onclick = function(){
        displayQuestion5();
    }

    choice1El.onclick = function(){
        displayQuestion5();
    }

    choice2El.onclick = function(){
        score++;
        displayQuestion5();
    }

    choice3El.onclick = function(){
        displayQuestion5();
    }

    }


    // display question 5

function displayQuestion5() {
    quizEL.style.display = "block";
    openingEL.style.display = "none";

    question.textContent = questions[4].question;

    let choice0El = document.getElementById("choice0");
    let choice1El = document.getElementById("choice1"); 
    let choice2El = document.getElementById("choice2");
    let choice3El = document.getElementById("choice3");
   
   choice0El.textContent = questions[4].answers[0];
   choice1El.textContent = questions[4].answers[1];
   choice2El.textContent = questions[4].answers[2];
   choice3El.textContent = questions[4].answers[3];
   
   choice0El.onclick = function(){
        endingEL.style.display = "block";
        quizEL.style.display = "none";
        updateScore();
    }

    choice1El.onclick = function(){
        endingEL.style.display = "block";
        quizEL.style.display = "none";
        updateScore();
    }

    choice2El.onclick = function(){
        score++;
        endingEL.style.display = "block";
        quizEL.style.display = "none";
        updateScore();
    }

    choice3El.onclick = function(){
        endingEL.style.display = "block";
        quizEL.style.display = "none";
        updateScore();
    }
    }

// function to update score

function updateScore () {
    let scoreEl = document.getElementById("finalScore");
    scoreEl.textContent = "Final score: " + score + "/5";
}


// function for saving a score

function saveScores() {

}

// function to display scores

function displayScores() {

}