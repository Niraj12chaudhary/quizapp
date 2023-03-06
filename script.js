const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 345 + 234?',
        answers: [
            { text: '579', correct: true },
            { text: '647', correct: false }
        ]
    },
    {
        question: 'Who is the best YouTuber for dsa?',
        answers: [
            { text: 'love babbar', correct: true },
            { text: 'apna college', correct: false},
            { text: 'striver', correct: false },
            { text: 'none of these' ,correct: false }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [
            { text: 'may be', correct: false },
            { text: 'YES!!!', correct: true },
            { text: 'Um no', correct: false },
            { text: 'IDK', correct: false }
        ]
    },
    {
        question: 'What is 78 * 2-78+2?',
        answers: [
            { text: '78', correct: false },
            { text: '80', correct: true }
        ]
    },
    {
        question: 'What is 2/2*2+2-2/2?',
        answers: [
            { text: '4', correct: false },
            { text: '3', correct: true }
        ]
    },
    {
        question: 'Which of the following type of class allows only one object of it to be created?',
        answers: [
            { text: 'Singleton class', correct: true },
            { text: 'Abstract class', correct: false },
             { text: 'virtual class', correct: false },
              { text: 'friend class', correct: false }
        ]
    },
    {
        
        question: 'The territory of Porus who offered strong resistance to Alexander was situated between the rivers of?',
        answers: [
            { text: 'Sutlej and Beas', correct: false },
            { text: 'Jhelum and Chenab', correct: false },
            { text: 'Ravi and Chenab', correct: false},
            { text: 'Ganga and Yamuna', correct: true }
        ]
    },
    {
        question: 'The Battle of Plassey was fought in?',
        answers: [
            { text: '1757', correct: true },
            { text: '1780', correct: false },
             { text: '1778', correct: false },
              { text: '1781', correct: false }
        ]
    }
]