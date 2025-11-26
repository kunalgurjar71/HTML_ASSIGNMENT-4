// ✅ Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "Vladimir Putin" },
  { question: "Which language is used for web development?", answer: "JavaScript" }
];

// ✅ Function to Run the Quiz
function runQuiz() {
  let score = 0; // Score Initialization

  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];
    const userAnswer = prompt(currentQuestion.question); // Prompt for User Input

    // Normalize the Input
    const normalizedAnswer = userAnswer ? userAnswer.toLowerCase().trim() : "";

    // Check the Answer
    if (normalizedAnswer === currentQuestion.answer.toLowerCase().trim()) {
      alert("✅ Correct!");
      score++; // Update Score
    } else {
      alert(`❌ Wrong! The correct answer is: ${currentQuestion.answer}`);
    }
  }

  // ✅ Display Final Score
  alert(`🎉 Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

// ✅ Run the Quiz in Browser Console
runQuiz();