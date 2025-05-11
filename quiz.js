document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Define the correct answers for each question
    const answers = {
        q1: 'q1a',
        q2: 'q2a',
        q3: 'q3a',
        q4: 'q4a',
        q5: 'q5b'
    };

    let score = 0;
    let resultText = '';

    // Check each question and compare the selection with the correct answer
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected) {
            if (selected.id === answers[q]) {
                score++;
                resultText += `Question ${q.substring(1)}: Correct\n`;
            } else {
                resultText += `Question ${q.substring(1)}: Wrong\n`;
            }
        } else {
            resultText += `Question ${q.substring(1)}: Not answered\n`;
        }
    }

    resultText = `You scored ${score} out of 5.\n` + resultText;
    document.getElementById('result').textContent = resultText;
});