document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var answers = {
    q1: document.querySelector('input[name="q1"]:checked'),
    q2: document.querySelector('input[name="q2"]:checked')
    // Add more question keys here
  };

  // Check if all questions are answered
  for (var key in answers) {
    if (!answers[key]) {
      alert("Please answer all questions!");
      return;
    }
  }

  // Calculate score
  var score = 0;
  for (var key in answers) {
    if (answers[key].value === 'a') {
      score++;
    }
  }

  // Display score
  var totalQuestions = Object.keys(answers).length;
  var percentage = (score / totalQuestions) * 100;
  var message = "You scored " + score + " out of " + totalQuestions + " (" + percentage + "%).";
  alert(message);
});
