const mathexp = document.getElementById('mathexpression');
const insertbox = document.querySelector('.insertanswer')
const checkResult = document.querySelector('.enterButton');
const scor = document.querySelector('.scoreButton');
const restartQuiz = document.querySelector('.reset');

// Function to generate random operator
function randomOperator(){
    const operatorarray = ['+','-','*','/'];
    const randomIndex = Math.floor(Math.random() * operatorarray.length); //Generate random index from 0 to 3
    const randomOp = operatorarray[randomIndex];

    return randomOp;
}


let firstNumber;
let operator;
let secondNumber;

function randomizeQuestion(){

    firstNumber = parseInt(Math.random() * 10000);
    operator = randomOperator();
    secondNumber = parseInt(Math.random() * 10000);

    // Convert the variables to their actual values
    firstNumber = parseFloat(firstNumber.toFixed(2));
    secondNumber = parseFloat(secondNumber.toFixed(2));

    // Create the expression string
    const expression = `${firstNumber} ${operator} ${secondNumber}`;

    // Evaluate the expression
    const result = eval(expression);

    return result
}

//Initial 
let qnum = 0;
let valuee; 
valuee = randomizeQuestion().toFixed(2);
qnum = qnum + 1;
mathexp.innerHTML = `Question ${qnum}/5: What is ${firstNumber} ${operator} ${secondNumber}? (Your answer should always be rounded to 2 decimal places). `;


const maxClicks = 5; // Number of quiz questions
let clickCount = 0; // Limit clicks to number of quiz qeustions
let score = 0;


    insertbox.addEventListener('click',function() { //Set the value to nothing if insert box is clicked, to clear any text.
        insertbox.value = '';
    });

    //Enter results
    checkResult.addEventListener('click', function() {
        const answer = insertbox.value.trim();
            // Check answer
            if ((answer !== '') && (!isNaN(answer))) { // We check that if answer is anything but an int, we ignore it and tell user to enter a number
                if(clickCount<maxClicks){
                    clickCount++;
                    const answerFloat = parseFloat(answer);
                    if (!isNaN(answerFloat)) {
                        const answerFloated = answerFloat.toFixed(2);
                        console.log(`EXPECTED ANSWER: `+valuee);
                        console.log(`YOU ENTERED: `+answerFloated);
                        if(answerFloated == valuee){
                            console.log(`CORRECT!`);
                            score++;
                            insertbox.value = ''; //Clear input box
                            valuee = randomizeQuestion().toFixed(2);
                            qnum = qnum + 1;
                            mathexp.innerHTML = `Question ${qnum}/5: What is ${firstNumber} ${operator} ${secondNumber}? (Your answer should always be rounded to 2 decimal places). `;
                        }
                        else{
                            console.log(`INCORRECT!`);
                            insertbox.value = '';//Clear input box
                            valuee = randomizeQuestion().toFixed(2);
                            qnum = qnum + 1;
                            mathexp.innerHTML = `Question ${qnum}/5: What is ${firstNumber} ${operator} ${secondNumber}? (Your answer should always be rounded to 2 decimal places). `;
                        }
                    }
                    //disable button once click limit reached
                    if (clickCount === maxClicks) {
                        checkResult.disabled = true;
                        mathexp.innerHTML = 'Quiz Complete! You can now check your score.';
                    }
                }
            }

            else{
                insertbox.value = 'Please enter a value';//Clear input box
            }
    });

//Check score button
scor.addEventListener('click',function() {
    if(clickCount === 5){ //Indicates quiz has completed
        alert(`You scored ${score} out of 5!`)
    }
    else{
        alert("Please complete the quiz first.")
    }
});

// Restart the quiz button
restartQuiz.addEventListener('click',function() {
    window.location.href = 'quiz.html';
});



