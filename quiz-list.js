// quiz-list.js

document.addEventListener('DOMContentLoaded', () => {
    const quizListContainer = document.getElementById('quiz-list');


const quizzes = [
    { 
        title: 'General Knowledge Quiz', 
        id: 'general-knowledge',
        author: 'John Doe',
        difficulty: 'Medium',
        numberOfQuestions: 10
    },
    { 
        title: 'History Quiz', 
        id: 'history',
        author: 'Jane Smith',
        difficulty: 'Hard',
        numberOfQuestions: 8
    },
    { 
        title: 'Science Quiz', 
        id: 'science',
        author: 'Emily Davis',
        difficulty: 'Easy',
        numberOfQuestions: 12
    },
    { 
        title: 'Literature Quiz', 
        id: 'literature',
        author: 'Michael Johnson',
        difficulty: 'Medium',
        numberOfQuestions: 6
    },
    { 
        title: 'Technology Quiz', 
        id: 'technology',
        author: 'Sarah Brown',
        difficulty: 'Hard',
        numberOfQuestions: 9
    },
    { 
        title: 'Pop Culture Quiz', 
        id: 'pop-culture',
        author: 'Chris Lee',
        difficulty: 'Medium',
        numberOfQuestions: 7
    }
];



quizzes.forEach(quiz => {
    const quizCard = document.createElement('div');
    quizCard.classList.add('quiz-card');
    quizCard.innerHTML = `
        <h2>${quiz.title}</h2>
        <p>Author: ${quiz.author}</p>
        <p>Difficulty: ${quiz.difficulty}</p>
        <p>Number of Questions: ${quiz.numberOfQuestions}</p>
        <button class="start-quiz-btn" data-quiz-id="${quiz.id}">Start Quiz</button>
    `;
    quizListContainer.appendChild(quizCard);
});

document.querySelectorAll('.start-quiz-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const quizId = event.target.getAttribute('data-quiz-id');
        window.location.href = `quiz.html?quiz=${quizId}`;
    });
});
});
