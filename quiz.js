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
    let resultHTML = '';

    // Check each question and compare the selection with the correct answer
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected) {
            if (selected.id === answers[q]) {
                score++;
                resultHTML += `<p>Question ${q.substring(1)}: <span style="color: green;">✔️ Correct</span></p>`;
            } else {
                const correctLabel = document.querySelector(`label[for="${answers[q]}"]`).textContent;
                resultHTML += `<p>Question ${q.substring(1)}: <span style="color: red;">❌ Wrong</span> - Correct answer: ${correctLabel}</p>`;
            }
        } else {
            const correctLabel = document.querySelector(`label[for="${answers[q]}"]`).textContent;
            resultHTML += `<p>Question ${q.substring(1)}: <span style="color: orange;">Not answered</span> - Correct answer: ${correctLabel}</p>`;
        }
    }

    resultHTML = `<h3>You scored ${score} out of 5.</h3>` + resultHTML;
    document.getElementById('result').innerHTML = resultHTML;
});