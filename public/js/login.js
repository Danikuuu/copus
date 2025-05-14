     // Generate a simple math question on page load
     let correctAnswer = 0;

     function generateMathPuzzle() {
       const a = Math.floor(Math.random() * 5) + 1;
       const b = Math.floor(Math.random() * 5) + 1;
       const question = `${a} + ${b}`;
       correctAnswer = a + b;
       document.getElementById('math-question').innerText = question;
     }

     function validateForm(event) {
       const userAnswer = parseInt(document.getElementById('humanAnswer').value);
       if (userAnswer !== correctAnswer) {
         event.preventDefault();
         alert("Incorrect answer. Please try again.");
       }
     }

     window.onload = generateMathPuzzle;