//CI
window.onload = console.log('The window has loaded!');

// quiz

const question = document.getElementById('question');
const choices = Array.from(document.getElementById('choice-text'));

let currentQuestion={}
let acceptingAnswers = true
let score = 0
let availableQuestions =[]

//BD
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

const scorePoints = 1
const maxQuestions = 5

function startGame(){
    score = 0;
    availableQuestions =[...questions]
    getNextQuestion()
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions);
    return window.location.assign('form.html')
}

let questionsIndex = Math.floor(Math.random().availableQuestions.length);
currentQuestion = availableQuestions(questionsIndex);
question.innerHTML = currentQuestion.questions;