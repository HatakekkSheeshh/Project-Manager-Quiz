document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Define the correct answers for questions 1-40
    const answers = {
        q1: 'q1c',   // C) To provide a graphical representation of project tasks and dependencies.
        q2: 'q2b',   // B) AON (Activity-on-Node).
        q3: 'q3a',   // A) Arrows.
        q4: 'q4d',   // D) The path with no slack time.
        q5: 'q5b',   // B) The hierarchy of project deliverables.
        q6: 'q6a',   // A) Risk management.
        q7: 'q7a',   // A) To define the project scope in measurable terms.
        q8: 'q8b',   // B) Using nodes to represent activities.
        q9: 'q9a',   // A) To mark significant events or deliverables.
        q10: 'q10b', // B) To measure and report project progress.
        q11: 'q11a', // A) Risk identification.
        q12: 'q12a', // A) Risk severity matrix.
        q13: 'q13b', // B) The expansion of the project scope over time without proper control.
        q14: 'q14b', // B) Transferring risk.
        q15: 'q15b', // B) Responding to risks when they occur.
        q16: 'q16b', // B) To analyze potential risks and their impacts.
        q17: 'q17a', // A) Scenario analysis.
        q18: 'q18b', // B) To minimize surprises and negative consequences.
        q19: 'q19b', // B) Mitigating risk.
        q20: 'q20a', // A) Funds allocated for unforeseen risks.
        q21: 'q21c', // C) Adding resources to critical activities to reduce project duration.
        q22: 'q22a', // A) Time-to-market pressures.
        q23: 'q23c', // C) Adding resources.
        q24: 'q24a', // A) Reducing project time usually increases direct costs.
        q25: 'q25b', // B) Cost-duration graph.
        q26: 'q26c', // C) The smallest increase in cost per unit of time.
        q27: 'q27a', // A) Time reserved to absorb unforeseen delays.
        q28: 'q28b', // B) Crashing activities.
        q29: 'q29b', // B) Indirect costs decrease as the project duration shortens.
        q30: 'q30b', // B) Reduced time increases the total project cost.
        q31: 'q31b', // B) The budgeted cost of work completed.
        q32: 'q32b', // B) Schedule Performance Index (SPI).
        q33: 'q33b', // B) To collect and analyze data for reporting progress.
        q34: 'q34a', // A) Tracking Gantt charts.
        q35: 'q35b', // B) The difference between earned value and planned value.
        q36: 'q36a', // A) The project is over budget.
        q37: 'q37a', // A) To measure project progress.
        q38: 'q38a', // A) Comparing actual performance against the baseline.
        q39: 'q39b', // B) Schedule and cost performance.
        q40: 'q40a'  // A) EV – AC.
    };

    let score = 0;
    let resultHTML = '';

    // Check each question's response
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

    resultHTML = `<h3>You scored ${score} out of 40.</h3>` + resultHTML;
    document.getElementById('result').innerHTML = resultHTML;
});