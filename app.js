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
        
        // Verify all critical elements are available
        console.log("Critical elements check:");
        [
            {id: 'flip-button', name: 'Flip Card Button'},
            {id: 'back-to-topics', name: 'Back to Topics Button'},
            {id: 'next-question', name: 'Next Question Button'},
            {id: 'quiz-back-to-topics', name: 'Quiz Back Button'}
        ].forEach(item => {
            const element = document.getElementById(item.id);
            console.log(`${item.name} (${item.id}): ${element ? 'Found' : 'MISSING'}`);
        });
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
        
        // Add event listeners to topic cards after they are rendered
        setTimeout(() => {
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
        }, 100);
        
        // Flashcard navigation - FIXED CORRECT IDs
        const flipButton = document.getElementById('flip-button');
        if (flipButton) {
            flipButton.addEventListener('click', flipFlashcard);
        } else {
            console.error('Flip button not found');
        }
        
        const nextFlashcardBtn = document.getElementById('next-flashcard');
        if (nextFlashcardBtn) {
            nextFlashcardBtn.addEventListener('click', () => {
                if (currentFlashcardIndex < currentTopicData.flashcards.length - 1) {
                    currentFlashcardIndex++;
                    renderFlashcard();
                }
            });
        }
        
        const prevFlashcardBtn = document.getElementById('prev-flashcard');
        if (prevFlashcardBtn) {
            prevFlashcardBtn.addEventListener('click', () => {
                if (currentFlashcardIndex > 0) {
                    currentFlashcardIndex--;
                    renderFlashcard();
                }
            });
        }
        
        if (flashcardElement) {
            flashcardElement.addEventListener('click', flipFlashcard);
        }
        
        // Enhanced back button handlers with error checking
        const backToTopicsBtn = document.getElementById('back-to-topics');
        const quizBackToTopicsBtn = document.getElementById('quiz-back-to-topics');
        
        if (backToTopicsBtn) {
            backToTopicsBtn.addEventListener('click', function() {
                console.log('Flashcard back button clicked'); // Debug log
                flashcardInterface.style.display = 'none';
                topicSelection.style.display = 'block';
                resetFlashcardState();
            });
        } else {
            console.error('Back to topics button not found in flashcard interface');
        }
        
        if (quizBackToTopicsBtn) {
            quizBackToTopicsBtn.addEventListener('click', function() {
                console.log('Quiz back button clicked'); // Debug log
                quizInterface.style.display = 'none';
                topicSelection.style.display = 'block';
                resetQuizState();
            });
        } else {
            console.error('Back to topics button not found in quiz interface');
        }
        
        const retakeQuizBtn = document.getElementById('retake-quiz');
        if (retakeQuizBtn) {
            retakeQuizBtn.addEventListener('click', () => {
                quizResults.style.display = 'none';
                resetQuizState();
                startQuizMode();
            });
        }
        
        const backToTopicsFromResultsBtn = document.getElementById('back-to-topics-from-results');
        if (backToTopicsFromResultsBtn) {
            backToTopicsFromResultsBtn.addEventListener('click', () => {
                quizResults.style.display = 'none';
                topicSelection.style.display = 'block';
                resetQuizState();
            });
        }
        
        // Add event listener for next question button - FIXED
        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => {
                console.log('Next question clicked');
                saveAnswer();
                currentQuizIndex++;
                
                if (currentQuizIndex < quizQuestions.length) {
                    renderQuizQuestion();
                    nextQuestionBtn.disabled = true;
                } else {
                    showQuizResults();
                }
            });
        } else {
            console.error('Next question button not found');
        }
        
        // Add event listener for finish quiz button
        if (finishQuizBtn) {
            finishQuizBtn.addEventListener('click', () => {
                saveAnswer();
                showQuizResults();
            });
        } else {
            console.error('Finish quiz button not found');
        }
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
        if (!currentTopicData || !currentTopicData.flashcards) {
            console.error('No flashcard data available');
            return;
        }
        
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
        if (flashcardElement) {
            flashcardElement.classList.remove('flipped');
        }
        
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
        const correctAnswers = selectedAnswers.filter((answer, index) => 
            answer === quizQuestions[index].correctIndex
        ).length;
        
        const totalQuestions = quizQuestions.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Create score display with percentage and progress bar
        let scoreHTML = `
            <span class="score-percentage">${percentage}%</span>
            <p>You got ${correctAnswers} out of ${totalQuestions} questions correct</p>
            <div class="score-bar-container">
                <div class="score-bar" style="width: ${percentage}%"></div>
            </div>
        `;
        
        // Add encouraging message based on score
        let messageClass = '';
        let message = '';
        
        if (percentage >= 90) {
            messageClass = 'excellent';
            message = 'Excellent! You have mastered this topic!';
        } else if (percentage >= 70) {
            messageClass = 'good';
            message = 'Good job! You have a solid understanding of this topic.';
        } else if (percentage >= 50) {
            messageClass = 'average';
            message = 'Not bad! Keep studying to improve your knowledge.';
        } else {
            messageClass = 'needs-improvement';
            message = 'You might need to review this topic more carefully.';
        }
        
        scoreHTML += `<div class="score-message ${messageClass}">${message}</div>`;
        scoreDisplay.innerHTML = scoreHTML;
        
        // Create detailed breakdown of answers
        let breakdownHTML = '';
        
        quizQuestions.forEach((question, index) => {
            const userAnswer = selectedAnswers[index];
            const correctIndex = question.correctIndex;
            
            breakdownHTML += `
                <div class="result-item">
                    <div class="result-question">Question ${index + 1}: ${question.question}</div>
                    <div class="result-options">
            `;
            
            question.options.forEach((option, optIndex) => {
                let optionClass = '';
                
                if (optIndex === correctIndex) {
                    optionClass = 'correct';
                } else if (userAnswer === optIndex && userAnswer !== correctIndex) {
                    optionClass = 'incorrect';
                }
                
                // Add a special class if this was the user's selected answer
                const userSelectedClass = userAnswer === optIndex ? 'user-selected' : '';
                
                breakdownHTML += `
                    <div class="result-option ${optionClass} ${userSelectedClass}">
                        ${option}
                    </div>
                `;
            });
            
            breakdownHTML += `
                    </div>
                </div>
            `;
        });
        
        resultsBreakdown.innerHTML = breakdownHTML;
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