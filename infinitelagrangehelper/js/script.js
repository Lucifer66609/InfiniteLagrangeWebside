document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded and ready');
});

function calculateProbability() {
    let points = document.getElementById('researchPoints').value;
    let blueprint = document.getElementById('blueprint').value;
    let probability = 0;

    // Example probabilities for different blueprints
    if (blueprint === 'general') {
        probability = points * 0.1; // 0.1% per point
    } else if (blueprint === 'specific1') {
        probability = points * 0.2; // 0.2% per point
    } else if (blueprint === 'specific2') {
        probability = points * 0.15; // 0.15% per point
    }

    // Ensure probability does not exceed 100%
    if (probability > 100) {
        probability = 100;
    }

    document.getElementById('result').innerText = 'Probability: ' + probability.toFixed(2) + '%';
}
