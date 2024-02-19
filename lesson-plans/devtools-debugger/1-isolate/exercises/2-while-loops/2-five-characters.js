'use strict';

// let input = null;
// while (input === null || input.length !== 5) {
//   input = prompt('enter something with 5 characters:');
// }

// let message = 'thank you for "' + input + '"!';

// alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

// let userInput = null;

// while (!userInput || userInput.length !== 10) {
//   let input1 = prompt('enter something');
//   let input2 = prompt('enter something more');
// }

// if (input1 && input2) {
//   userInput = input1 + input2;
// } else {
//   alert(`You need to enter something to both prompts and
//   the length of both must be 10 characters`);
// }

// alert('thank you for "' + userInput + '"!');

let userInput;

debugger;

while (!userInput || userInput.length !== 10) {
  const partOne = prompt('enter something');
  const partTwo = prompt('enter something');

  // Make sure the user enter something to partOne and partTwo
  if (partOne && partTwo) {
    userInput = partOne + partTwo;
  } else {
    alert(
      `You need to enter something to both prompts and
    the length of both must be 10 characters`,
    );
  }
}

alert('Thank you for your input : ' + userInput);
