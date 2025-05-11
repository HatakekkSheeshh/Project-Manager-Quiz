document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    if (document.getElementById('q1a').checked) score++;
    if (document.getElementById('q2a').checked) score++;
    if (document.getElementById('q3a').checked) score++;
    if (document.getElementById('q4a').checked) score++;
    if (document.getElementById('q5b').checked) score++;
    // Add conditions for other questions

    document.getElementById('result').textContent = 'You scored ' + score + ' out of 5';
});
