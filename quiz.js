// quiz.js

// Fetch the quiz data based on the quiz ID from the URL
document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Read the quiz ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('quiz');

    if (!quizId) {
        document.getElementById('question').textContent = 'No quiz selected.';
        return;
    }

    // Step 2: Fetch the corresponding quiz data based on the quiz ID
    fetchQuizData(quizId);

    // Timer functionality
    const timerElement = document.getElementById('timer');
    let timer = 10 * 60; // 10 minutes timer
    let timerInterval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            return;
        }
        timer--;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);

    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    let currentQuestionIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });

    document.getElementById('submit-btn').addEventListener('click', () => {
        alert('Quiz submitted!');
    });
});

let quizData = [];

// Function to fetch quiz data based on quiz ID
function fetchQuizData(quizId) {
    // Step 2: Define quiz data
    const quizzes = {
        'general-knowledge': [
            { question: 'What is the capital city of Australia?', options: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'], answer: 'Canberra' },
            { question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' }
        ],
        'history': [
            { question: 'Who was the first president of the United States?', options: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'John Adams'], answer: 'George Washington' },
            { question: 'The Great Wall of China was primarily built to protect against which group?', options: ['Mongols', 'Huns', 'Persians', 'Vikings'], answer: 'Mongols' }
        ],
        'science': [
            { question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'NaCl'], answer: 'H2O' },
            { question: 'What is the process by which plants make their own food using sunlight called?', options: ['Respiration', 'Digestion', 'Photosynthesis', 'Transpiration'], answer: 'Photosynthesis' }
        ],
        'literature': [
            { question: 'Who wrote the play "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], answer: 'William Shakespeare' },
            { question: 'In George Orwell\'s "1984," what is the name of the totalitarian regime\'s leader?', options: ['Big Brother', 'The Party', 'O\'Brien', 'Emmanuel Goldstein'], answer: 'Big Brother' }
        ],
        'technology': [
            { question: 'What does the acronym "HTTP" stand for in the context of web addresses?', options: ['HyperText Transmission Protocol', 'HyperText Transfer Protocol', 'HyperText Translation Protocol', 'HyperText Transaction Protocol'], answer: 'HyperText Transfer Protocol' }
        ],
        'pop-culture': [
            { question: 'Which movie features the character "Jack Dawson"?', options: ['Titanic', 'Avatar', 'Inception', 'The Great Gatsby'], answer: 'Titanic' }
        ]
    };

    // Fetch quiz data based on the quiz ID
    quizData = quizzes[quizId] || [];
    showQuestion(0);
}

// Function to display a question and its options
function showQuestion(index) {
    if (index < 0 || index >= quizData.length) return;

    const question = quizData[index];
    document.getElementById('question').textContent = question.question;

    const answersContainer = document.getElementById('answers_container');
    answersContainer.innerHTML = ''; // Clear previous answers
    question.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="question-${index}" value="${option}"> ${option}`;
        answersContainer.appendChild(label);
    });
}
