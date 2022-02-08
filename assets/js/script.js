//CI
window.onload = console.log('The window has loaded!');

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

//Don't cheat

document.addEventListener ('DOMContentLoaded', () => {
    document.querySelector('cheat').addEventListener('click', handleClickA);

    if('document' in window) {
        console.log('Cheated')
    }
})

function handleClickA(ev) {
    alert('HEY NO CHEATING')
}


//results



//newsletter sign up form

