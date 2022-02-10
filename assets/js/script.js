//code credit to code institue lessons
window.onload = console.log('The window has loaded!');

/**
 * basic confirmation check for home menu to start game
 * also for home button in quiz to leave quiz mid game
 * code credit to Tony Teaches Tech, full credit in README.md
 */
function checker() {
    var result = confirm('Are you sure?');
    if (result == false){
        event.preventDefault();
    }
}

/**
 * credit to Brian Design for the quiz app code
 * fully credited in README.md file
 * credit for lines 18 to 136
 */

const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];//available questions are sourced from the below array

//question and answer code structure credit to Brian Design. custom questions and answers by me
let questions = [
    {
        question: 'The area where a river meets the sea or ocean is called?',
        choice1: 'An Estuary',
        choice2: 'A Confluence',
        choice3: 'A Source',
        choice4: 'A Tributary',
        answer: 1,
    },
    {
        question: 'What is the driest desert in the world?',
        choice1: 'Sahara',
        choice2: 'Atacama',
        choice3: 'Antarctica',
        choice4: 'Gobi',
        answer: 2,
    },
    {
        question:'What is the deepest part of the ocean called?',
        choice1: 'The Laurentian Abyss',
        choice2: 'The Mariana Trench',
        choice3: 'The Tonga Trench',
        choice4: 'The Endless Void',
        answer: 2,
    },
    {
        question: 'What is the 2nd largest continent?',
        choice1: 'Asia',
        choice2: 'Antarctica',
        choice3: 'South America',
        choice4: 'Africa',
        answer: 4,
    },
    {
        question: 'How many time zones does Australia have?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 3,
    },
    {
        question: 'What year was the Battle of Hastings?',
        choice1: '1275AD',
        choice2: '945AD',
        choice3: '1021AD',
        choice4: '1066AD',
        answer: 4,
    },
    {
        question: 'Who was the Greek God of War?',
        choice1: 'Ares',
        choice2: 'Tyr',
        choice3: 'Mars',
        choice4: 'Athena',
        answer: 1,
    },
];

const SCORE_POINTS = 1;//each correct answer is equal to one point
const MAX_QUESTIONS = 5;//the maximum number of questions to be asked  in the game

startGame = () => {
    questionCounter = 0;//start game at question 0 in array (although random every time)
    score = 0;//start game with player score at zero
    availableQuestions = [...questions];//select available questions from the questions array
    getNewQuestion(); //required to populate first question and answers
};

/**
 * function to keep getting new questions until amount of questions left in array are at zero
 * or if question counter has reached max questions value.
 * Once this occurs, user automatically brought to form.html webpage
 */
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        return window.location.assign('form.html');
    }
    
    questionCounter++;

    /**
     * gets a random question from the array of questions
     * popuates the inner text of the question placeholder with random question being asked
     */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    

    choices.forEach(choice => {
        const number = choice.dataset.number;//accesses the custom dataset given in the html
        choice.innerText = currentQuestion['choice'+ number];
    });
    //removes an asked question from the array each time it is answered
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

//add event listener to pick up which answer is clicked on
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

       /** 
        * supposed to apply css to turn selected answer green if correct and red if incorrect but I could not get to work
        * code still required for functioning quiz so not removed
       */

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply ==='correct') {
            incrementScore(SCORE_POINTS);//required to keep score if answer correct
        }

        selectedChoice.parentElement.classList.add(classToApply);

        /**
         * code to give a time delay for user to see whether their answer turns green or red. not working but still required for quiz
         */
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();//calls the next question after answered correctly or incorrectly

        }, 20);//capping total point available to score at 20
  });
});
//increases correct answer score by one and populates this score in the score area
incrementScore = num=> {
    score+=num;
    scoreText.innerText = score;
};

startGame(); //required to start the quiz and populate the question and answers with content other than placeholders

/**Pop up window for Don't Cheat Alert
 * code credit to Adam Khoury for lines 161 to 182, full credit given in README.md
 */

//calls the below features when the alert box is first rendered on the screen
function customAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dontcheatoverlay');
        var dialogbox = document.getElementById('dontcheatbox');
        dialogoverlay.style.display = "block";//sets opaque background css to activate behind alert box
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW/2) - (550 * '.5') + "px";
        dialogbox.style.top = "100px";//sets alert box distance from top of window
        dialogbox.style.display = "block";//sets alert box css to display
        document.getElementById('dontcheatboxhead').innerHTML = "Ugh-oh!";//sets alert box header message
        document.getElementById('dontcheatboxbody').innerHTML = dialog;//sets alert box message to the message declared in the html onclick alert render
        document.getElementById('dontcheatboxfoot').innerHTML = '<button onclick = "alert.ok()">OK</button>'; //sets alert box OK button
    };
    //calls the below features when the ok button is clicked on the alert box
    this.ok = function(){
        document.getElementById('dontcheatbox').style.display = "none";//makes alert box disappear
        document.getElementById('dontcheatoverlay').style.display = "none";//makes the opaque baclground behind alert box disappear

    };

}var alert = new customAlert();//makes the alert pop up in the browser when the Don't Cheat buttonis clicked

/**
 * countdowntimer code
 * code credit to Florin Pop
 */
const startTime = 10; //starts countdown timer at 10
let time = startTime * 60; //multiplies the timer 10 by 60 to give 600 seconds to countdown from i.e 10 mins

const timer = document.getElementById('timer');

setInterval(countdown, 1000); //sets interval to 1000 to countdown in seconds

function countdown() {
    const minutes = Math.floor(time /60);//minutes
    let seconds = time % 60;//seconds

    seconds = seconds < 10 ? '0'+ seconds : seconds; 

    timer.innerHTML = `${minutes}:${seconds}`;//populates the timer with the minutes and seconds
    time--; //tells the time to deduct 1 second at a time



    //custom js - when timer gets to zero. prevents negative numbers and sends player to timeout.html
    if(time === 0) {
        return window.location.assign ('timeout.html');
    }
    
}

//random pub quiz team name generator on timeout page


/** 
 * newsletter sign up form and feedback
 * code structure from code institute lessons but custom code and content
*/

//getting form values, submission, and validation
function handleSubmit(event) {
    event.preventDefault();

    let form = document.getElementById('form');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let formScore = document.getElementById('form-score');
    let faveCateg = document.getElementById('fave-categ');
    let extraFeedback = document.getElementById('extra-feedback');

    console.log('Player full name is:', name.value);//logs the name the player has given to the console upon submission
    console.log('Player email address is:', email.value);//logs the email address the player has given to the console upon submission 
    console.log('Player Age is:', age.value);//logs the age the player has given to the console upon submission
    console.log('Player score is:', formScore.value);//logs the score the player has got in the quiz to the console upon submission 
    console.log('Favourite category is:', faveCateg.value);//logs the players favourite category played to the console upon submission
    console.log('Extra feedback is:', extraFeedback.value);//logs any additional player comments to the console upon submission
    
    let email1 = form.elements.email.value;//declares value of email address entered by player
    let email2 = form.elements['conf-email'].value;//declares value of email address confirmed by player
    
    /**
     * if both emails provided do not match form is not validated and error message appears below form
     */
    if (email1 !== email2){
        let errorMsg = document.getElementById('error-msg');
        errorMsg.innerHTML = `<p>Ugh-oh, your emails do not match! Please correct and resubmit.</p>`;
        errorMsg.style.display = 'block';

        console.log('Email not validated!');
        }
        //if email is validated acknowledgment message appears below form
        else {
            let html = `
            <p>Thanks for subscribing! We'll email you shortly with info on how to activate your account!</p>`;

            let acknowledgementDiv = document.getElementById('acknowledgment');
            acknowledgementDiv.innerHTML = html;
            acknowledgementDiv.style.display = 'block';

            console.log('Email successfully validated!');
        /*form.submit()*/}
}

let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);



