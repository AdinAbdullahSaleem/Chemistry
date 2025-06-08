document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const modeSelection = document.getElementById('mode-selection');
    const topicSelection = document.getElementById('topic-selection');
    const topicsList = document.getElementById('topics-list');
    const flashcardInterface = document.getElementById('flashcard-interface');
    const quizInterface = document.getElementById('quiz-interface');
    const quizResults = document.getElementById('quiz-results');
    
    // Flashcard elements
    const flashcardTopicTitle = document.getElementById('flashcard-topic-title');
    const flashcardQuestion = document.getElementById('flashcard-question');
    const flashcardAnswer = document.getElementById('flashcard-answer');
    const flashcardCounter = document.getElementById('flashcard-counter');
    const flashcardElement = document.querySelector('.flashcard');
    
    // Quiz elements
    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const quizCounter = document.getElementById('quiz-counter');
    const nextQuestionBtn = document.getElementById('next-question');
    const finishQuizBtn = document.getElementById('finish-quiz');
    const scoreDisplay = document.getElementById('score-display');
    const resultsBreakdown = document.getElementById('results-breakdown');
    
    // State variables
    let currentMode = '';
    let currentTopic = '';
    let currentFlashcardIndex = 0;
    let currentQuizIndex = 0;
    let selectedAnswers = [];
    let currentTopicData = null;
    let quizQuestions = [];
    let isCardFlipped = false;
    
    // Initialize the application
    function init() {
        renderTopics();
        attachEventListeners();
    }
    
    // Render the topics list
    function renderTopics() {
        topicsList.innerHTML = '';
        
        topics.forEach(topic => {
            const topicCard = document.createElement('div');
            topicCard.className = 'topic-card';
            topicCard.dataset.topic = topic.id;
            topicCard.textContent = topic.name;
            topicsList.appendChild(topicCard);
        });
    }
    
    // Attach event listeners
    function attachEventListeners() {
        // Mode selection
        document.getElementById('flashcard-mode-btn').addEventListener('click', () => {
            currentMode = 'flashcard';
            modeSelection.style.display = 'none';
            topicSelection.style.display = 'block';
        });
        
        document.getElementById('quiz-mode-btn').addEventListener('click', () => {
            currentMode = 'quiz';
            modeSelection.style.display = 'none';
            topicSelection.style.display = 'block';
        });
        
        // Topic selection
        document.getElementById('back-to-mode').addEventListener('click', () => {
            topicSelection.style.display = 'none';
            modeSelection.style.display = 'block';
        });
        
        document.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('click', () => {
                currentTopic = card.dataset.topic;
                currentTopicData = topics.find(topic => topic.id === currentTopic);
                
                if (currentMode === 'flashcard') {
                    startFlashcardMode();
                } else if (currentMode === 'quiz') {
                    startQuizMode();
                }
            });
        });
        
        // Flashcard navigation
        document.getElementById('flip-flashcard').addEventListener('click', flipFlashcard);
        
        document.getElementById('next-flashcard').addEventListener('click', () => {
            if (currentFlashcardIndex < currentTopicData.flashcards.length - 1) {
                currentFlashcardIndex++;
                renderFlashcard();
            }
        });
        
        document.getElementById('prev-flashcard').addEventListener('click', () => {
            if (currentFlashcardIndex > 0) {
                currentFlashcardIndex--;
                renderFlashcard();
            }
        });
        
        flashcardElement.addEventListener('click', flipFlashcard);
        
        document.getElementById('back-to-topics').addEventListener('click', () => {
            flashcardInterface.style.display = 'none';
            topicSelection.style.display = 'block';
            resetFlashcardState();
        });
        
        // Quiz navigation
        nextQuestionBtn.addEventListener('click', () => {
            saveAnswer();
            
            if (currentQuizIndex < quizQuestions.length - 1) {
                currentQuizIndex++;
                renderQuizQuestion();
                nextQuestionBtn.disabled = true;
            } else {
                nextQuestionBtn.style.display = 'none';
                finishQuizBtn.style.display = 'block';
            }
        });
        
        finishQuizBtn.addEventListener('click', () => {
            saveAnswer();
            showQuizResults();
        });
        
        document.getElementById('quiz-back-to-topics').addEventListener('click', () => {
            quizInterface.style.display = 'none';
            topicSelection.style.display = 'block';
            resetQuizState();
        });
        
        document.getElementById('retake-quiz').addEventListener('click', () => {
            quizResults.style.display = 'none';
            resetQuizState();
            startQuizMode();
        });
        
        document.getElementById('back-to-topics-from-results').addEventListener('click', () => {
            quizResults.style.display = 'none';
            topicSelection.style.display = 'block';
            resetQuizState();
        });
    }
    
    // Flashcard Functions
    function startFlashcardMode() {
        topicSelection.style.display = 'none';
        flashcardInterface.style.display = 'block';
        currentFlashcardIndex = 0;
        flashcardTopicTitle.textContent = currentTopicData.name;
        renderFlashcard();
        
        // Add keyboard event listener for flashcards
        document.addEventListener('keydown', handleFlashcardKeydown);
    }
    
    function renderFlashcard() {
        const flashcard = currentTopicData.flashcards[currentFlashcardIndex];
        flashcardQuestion.textContent = flashcard.front;
        flashcardAnswer.textContent = flashcard.back;
        flashcardCounter.textContent = `${currentFlashcardIndex + 1} / ${currentTopicData.flashcards.length}`;
        
        // Reset flip state
        isCardFlipped = false;
        flashcardElement.classList.remove('flipped');
    }
    
    function flipFlashcard() {
        isCardFlipped = !isCardFlipped;
        if (isCardFlipped) {
            flashcardElement.classList.add('flipped');
        } else {
            flashcardElement.classList.remove('flipped');
        }
    }
    
    function resetFlashcardState() {
        currentFlashcardIndex = 0;
        isCardFlipped = false;
        flashcardElement.classList.remove('flipped');
        
        // Remove keyboard event listener when exiting flashcard mode
        document.removeEventListener('keydown', handleFlashcardKeydown);
    }
    
    // Quiz Functions
    function startQuizMode() {
        topicSelection.style.display = 'none';
        quizInterface.style.display = 'block';
        
        // Prepare quiz
        quizQuestions = prepareQuiz(currentTopicData.quiz, 10); // Get 10 random questions
        currentQuizIndex = 0;
        selectedAnswers = new Array(quizQuestions.length).fill(null);
        
        quizTopicTitle.textContent = currentTopicData.name;
        
        renderQuizQuestion();
        
        nextQuestionBtn.disabled = true;
        nextQuestionBtn.style.display = 'block';
        finishQuizBtn.style.display = 'none';
    }
    
    function prepareQuiz(questions, count) {
        // Shuffle and limit questions
        return shuffleArray([...questions]).slice(0, Math.min(count, questions.length));
    }
    
    function renderQuizQuestion() {
        const currentQuestion = quizQuestions[currentQuizIndex];
        questionElement.textContent = currentQuestion.question;
        
        // Display options
        optionsElement.innerHTML = '';
        // Add a variable to track if question has been answered
        let questionAnswered = false;
        
        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', () => {
                // Only allow selection if question hasn't been answered yet
                if (!questionAnswered) {
                    // Mark question as answered
                    questionAnswered = true;
                    
                    // Add selection to clicked option
                    optionElement.classList.add('selected');
                    
                    // Show immediate feedback
                    if (index === currentQuestion.correctIndex) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('incorrect');
                        // Show which one was correct
                        document.querySelectorAll('.option')[currentQuestion.correctIndex].classList.add('correct');
                    }
                    
                    // Make all options unclickable by adding a "disabled" class
                    document.querySelectorAll('.option').forEach(opt => {
                        opt.classList.add('disabled');
                    });
                    
                    nextQuestionBtn.disabled = false;
                    if (currentQuizIndex === quizQuestions.length - 1) {
                        nextQuestionBtn.style.display = 'none';
                        finishQuizBtn.style.display = 'block';
                    }
                }
            });
            
            optionsElement.appendChild(optionElement);
        });
        
        quizCounter.textContent = `Question ${currentQuizIndex + 1} of ${quizQuestions.length}`;
    }
    
    function saveAnswer() {
        const selectedOption = document.querySelector('.option.selected');
        if (selectedOption) {
            selectedAnswers[currentQuizIndex] = parseInt(selectedOption.dataset.index);
        }
    }
    
    function showQuizResults() {
        quizInterface.style.display = 'none';
        quizResults.style.display = 'block';
        
        // Calculate score
        let correctAnswers = 0;
        quizQuestions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correctIndex) {
                correctAnswers++;
            }
        });
        
        const scorePercentage = Math.round((correctAnswers / quizQuestions.length) * 100);
        scoreDisplay.textContent = `Your score: ${correctAnswers} out of ${quizQuestions.length} (${scorePercentage}%)`;
        
        // Show breakdown
        resultsBreakdown.innerHTML = '';
        quizQuestions.forEach((question, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            if (selectedAnswers[index] === question.correctIndex) {
                resultItem.classList.add('correct');
            } else {
                resultItem.classList.add('incorrect');
            }
            
            resultItem.innerHTML = `
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Your answer:</strong> ${question.options[selectedAnswers[index]]}</p>
                <p><strong>Correct answer:</strong> ${question.options[question.correctIndex]}</p>
            `;
            
            resultsBreakdown.appendChild(resultItem);
        });
    }
    
    function resetQuizState() {
        currentQuizIndex = 0;
        selectedAnswers = [];
        quizQuestions = [];
        nextQuestionBtn.disabled = true;
        nextQuestionBtn.style.display = 'block';
        finishQuizBtn.style.display = 'none';
    }
    
    // Utility Functions
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Add this function after your existing functions
    function handleFlashcardKeydown(event) {
        if (!flashcardInterface.style.display || flashcardInterface.style.display === 'none') {
            return; // Only handle keyboard events when flashcards are visible
        }
        
        switch (event.key) {
            case ' ':  // Spacebar
                event.preventDefault(); // Prevent page scrolling
                flipFlashcard();
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentFlashcardIndex < currentTopicData.flashcards.length - 1) {
                    currentFlashcardIndex++;
                    renderFlashcard();
                }
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (currentFlashcardIndex > 0) {
                    currentFlashcardIndex--;
                    renderFlashcard();
                }
                break;
        }
    }

    // Initialize the app
    init();
});