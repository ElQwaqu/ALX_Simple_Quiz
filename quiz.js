/**
 * Checks if the user's selected answer is correct and displays appropriate feedback
 */
function checkAnswer() {
    // The correct answer to the quiz question
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if user selected an answer
    if (selectedRadioButton) {
        const userAnswer = selectedRadioButton.value;
        
        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no answer is selected
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);