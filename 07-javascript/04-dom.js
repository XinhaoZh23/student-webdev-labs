// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input1 = document.getElementById('userInput1');
const copyBtn = document.getElementById('copy');
const outputDiv = document.querySelector('.output');

// add an event listener on the target element
copyBtn.addEventListener('click', () => {
  // callback function to handle event
  outputDiv.textContent = input1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input2 = document.getElementById('userInput2');
const inputEventSection = document.getElementById('inputEventExample');
const outputP = inputEventSection.querySelector('p');

// add an event listener on the target element
input2.addEventListener('input', () => {
  // callback function to handle event
  outputP.textContent = input2.value;
});
