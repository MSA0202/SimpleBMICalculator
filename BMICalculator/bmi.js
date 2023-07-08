/* 
**BIG NOTE: 

document.getElementById() --> use in conjuntion with html id="..."

document.querySelector()--> use in conjunction with html class="..."

*/

// Retrieve the necessary elements from the HTML

// Input boxes
const insertNameInput = document.getElementById('insert-text');
const insertAge = document.getElementById('insert-age');
const insertWeight = document.getElementById('insert-weight');
const insertHeight= document.getElementById('insert-height'); /* get element by id because id */

// Buttons
const insertButton = document.querySelector('.insert-button'); /* queryselector because class */
const insertAWH = document.querySelector('.bmi-button');
const calculation = document.querySelector('.calculate');

//Output text --> see css --> we made a box to display it 
const outputText = document.querySelector('.output-text');

// Define an array to store the names
let namesArray = [];
let arraySingular = [];

// Event listener for the insert button
insertButton.addEventListener('click', function() {
    const name = insertNameInput.value.trim();
    if (name !== '') {
        namesArray.push(name);
        insertNameInput.value = ''; // Clear the input field
    }
});

// Event listener for the insert AWH button
insertAWH.addEventListener('click', function() {
    const age = insertAge.value.trim();
    const weight = insertWeight.value.trim();
    const height = insertHeight.value.trim();
  
    if (age !== '' && weight !== '' && height !== '') {
      if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('Please enter numbers for age, weight, and height.');
      } else {
        arraySingular = [age, weight, height];
        insertAge.value = ''; // Clear the input fields
        insertWeight.value = '';
        insertHeight.value = '';
      }
    }
  });



// Event listener for the calculate button
calculation.addEventListener('click', function() {
    if(namesArray.length == 0 || arraySingular.length == 0 ){
        alert('You have not entered any information yet. Please insert all: Name, Age, Weight and Height information.')
    }
    else{
        const solution = calculateBMI(arraySingular);
        outputText.textContent = 'Hi, ' +namesArray[0]+ ' , your BMI is: ' + parseFloat(solution.toFixed(2)); //use toFixed to round to 2 decimal places but it converts it to a string, so convert it back to float using parseFloat
    }
  });
  
  function calculateBMI(arr) {
    const age = parseFloat(arr[0]);
    const weight = parseFloat(arr[1]);
    const height = parseFloat(arr[2]);
  
    const bmi = weight / (height * height);
    return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
  }

function calculateBMI(arr){
    formula = arr[1]/(arr[2]*arr[2])
    return (formula);
}


