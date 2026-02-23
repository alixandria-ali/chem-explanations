// Interactive Step Checker for Chemistry Problems
// Allows students to check intermediate steps in problem-solving

class StepChecker {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.steps = [];
        this.currentStep = 0;
    }

    addStep(stepNumber, correctAnswer, tolerance = 0.01, unit = '') {
        this.steps.push({
            number: stepNumber,
            correctAnswer: parseFloat(correctAnswer),
            tolerance: tolerance,
            unit: unit,
            attempted: false,
            correct: null
        });
    }

    render() {
        const html = `
            <div class="step-checker-container">
                <h4>Check Your Steps</h4>
                <p class="step-checker-intro">Enter your answer for each step to verify your work:</p>
                ${this.steps.map((step, index) => `
                    <div class="step-input-group" id="step-${index}">
                        <label for="input-${index}">
                            <strong>Step ${step.number}:</strong>
                        </label>
                        <div class="input-row">
                            <input
                                type="number"
                                id="input-${index}"
                                step="any"
                                placeholder="Enter your answer"
                                ${index > 0 && !this.steps[index - 1].correct ? 'disabled' : ''}
                            />
                            ${step.unit ? `<span class="unit">${step.unit}</span>` : ''}
                            <button
                                onclick="checker_${this.container.id}.checkStep(${index})"
                                ${index > 0 && !this.steps[index - 1].correct ? 'disabled' : ''}
                            >
                                Check
                            </button>
                        </div>
                        <div class="feedback" id="feedback-${index}"></div>
                    </div>
                `).join('')}
            </div>
        `;
        this.container.innerHTML = html;
    }

    checkStep(stepIndex) {
        const input = document.getElementById(`input-${stepIndex}`);
        const feedback = document.getElementById(`feedback-${stepIndex}`);
        const userAnswer = parseFloat(input.value);
        const step = this.steps[stepIndex];

        if (isNaN(userAnswer)) {
            feedback.innerHTML = '<span class="feedback-error">⚠️ Please enter a valid number</span>';
            return;
        }

        const difference = Math.abs(userAnswer - step.correctAnswer);
        const isCorrect = difference <= step.tolerance;

        step.attempted = true;
        step.correct = isCorrect;

        if (isCorrect) {
            feedback.innerHTML = '<span class="feedback-correct">✓ Correct! Continue to the next step.</span>';
            input.disabled = true;

            // Enable next step if exists
            if (stepIndex < this.steps.length - 1) {
                const nextInput = document.getElementById(`input-${stepIndex + 1}`);
                const nextButton = document.querySelector(`#step-${stepIndex + 1} button`);
                if (nextInput) nextInput.disabled = false;
                if (nextButton) nextButton.disabled = false;
            } else {
                feedback.innerHTML += '<br><span class="feedback-complete">🎉 All steps completed correctly!</span>';
            }
        } else {
            const hint = this.getHint(stepIndex, userAnswer, step.correctAnswer);
            feedback.innerHTML = `
                <span class="feedback-incorrect">✗ Not quite right.</span>
                <div class="hint">${hint}</div>
            `;
        }
    }

    getHint(stepIndex, userAnswer, correctAnswer) {
        const ratio = userAnswer / correctAnswer;

        if (ratio > 10 || ratio < 0.1) {
            return "💡 Hint: Check your calculation - the answer is off by a large factor. Did you use the correct conversion or formula?";
        } else if (Math.abs(userAnswer + correctAnswer) < 0.01 && correctAnswer !== 0) {
            return "💡 Hint: Your answer has the right magnitude but wrong sign. Check positive/negative conventions.";
        } else {
            return "💡 Hint: Review this step's calculation. Check your arithmetic and significant figures.";
        }
    }

    reset() {
        this.steps.forEach(step => {
            step.attempted = false;
            step.correct = null;
        });
        this.render();
    }
}

// CSS styles injected
if (!document.getElementById('step-checker-styles')) {
    const styles = document.createElement('style');
    styles.id = 'step-checker-styles';
    styles.textContent = `
        .step-checker-container {
            background: var(--md-code-bg-color);
            border-left: 4px solid var(--md-primary-fg-color);
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 4px;
        }
        .step-checker-container h4 {
            margin-top: 0;
            color: var(--md-primary-fg-color);
        }
        .step-checker-intro {
            color: var(--md-default-fg-color--light);
            margin-bottom: 1rem;
        }
        .step-input-group {
            margin: 1.5rem 0;
        }
        .step-input-group label {
            display: block;
            margin-bottom: 0.5rem;
        }
        .input-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        .input-row input {
            flex: 1;
            min-width: 150px;
            padding: 0.5rem;
            border: 1px solid var(--md-default-fg-color--lightest);
            border-radius: 4px;
            background: var(--md-default-bg-color);
            color: var(--md-default-fg-color);
            font-family: var(--md-code-font-family);
        }
        .input-row input:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .input-row .unit {
            font-weight: bold;
            color: var(--md-default-fg-color--light);
        }
        .input-row button {
            padding: 0.5rem 1.5rem;
            background: var(--md-primary-fg-color);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.2s;
        }
        .input-row button:hover:not(:disabled) {
            background: var(--md-accent-fg-color);
        }
        .input-row button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .feedback {
            margin-top: 0.5rem;
            font-size: 0.95rem;
        }
        .feedback-correct {
            color: #10b981;
            font-weight: 500;
        }
        .feedback-incorrect {
            color: #ef4444;
            font-weight: 500;
        }
        .feedback-error {
            color: #f59e0b;
            font-weight: 500;
        }
        .feedback-complete {
            color: #10b981;
            font-weight: bold;
            font-size: 1.1rem;
        }
        .hint {
            margin-top: 0.5rem;
            padding: 0.75rem;
            background: var(--md-default-bg-color);
            border-left: 3px solid #3b82f6;
            border-radius: 4px;
            font-style: italic;
        }
    `;
    document.head.appendChild(styles);
}
