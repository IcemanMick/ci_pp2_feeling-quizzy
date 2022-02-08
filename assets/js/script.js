//CI
window.onload = console.log('The window has loaded!');

//image changing





// quiz. credit to BD

const question = document.getElementById('question');
const scoreText = document.getElementById('score')
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = []

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
    }
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5 

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        return window.location.assign('form.html')
    }
    
    questionCounter++

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply ==='correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 20)
  })
})

incrementScore = num=> {
    score+=num
    scoreText.innerText = score
}

startGame()

// custom Alert

function customAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW/2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick = "alert.ok()">OK</button>';
    }
    this.ok = function(){
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";

    }

}

var alert = new customAlert();


// timer
//credit code here
const startTime = 10; //up timer to 10mins when ready
let time = startTime * 60;

const timer = document.getElementById('timer');

setInterval(countdown, 1000) // up interval to 1000 when ready

function countdown() {
    const minutes = Math.floor(time /60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0'+ seconds : seconds; //1 or 10

    timer.innerHTML = `${minutes}:${seconds}`
    time--;


    //timer warning for 5 mins left

    //timer warning for 1 min left

    //custom js - ran out of time
    if(time === 0) {
        return window.location.assign ('timeout.html');
    }
    
}


//results



//newsletter sign up form

function handleSubmit() {
    event.preventDefault();

    let fname = document.getElementById('fullname');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let formScore = document.getElementById('formscore');
    let faveCateg = document.getElementById('fave-categ')
    let extraFeedback = document.getElementById('extra-feedback');

    console.log('Player full name is', fname.value);
    console.log('Player email address is', email.value);
    console.log('Player Age is:', age.value);
    console.log('Player score is:', formScore.value);
    console.log('Favourite category is:', faveCateg.value);
    console.log('Extra feedback is:', extraFeedback.value)
}

let form = document.getElementById('sign-up-form');
form.addEventListener('submit', handleSubmit);