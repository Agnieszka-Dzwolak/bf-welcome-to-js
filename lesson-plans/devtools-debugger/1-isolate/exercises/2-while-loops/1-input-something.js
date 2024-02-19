'use strict';

// let input = null;
// while (input === null) {
//   input = prompt('input something:');
// }

// alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/

// let input = null;
// while (input === null) {
//   input = prompt('input something:');
//   input++;
// }

// alert(prompt('thank you, but enter something else!'));

// let userInput;
// while (true) {
//   userInput = prompt('input something:');
//   console.log(userInput);
// }

// // Note this will never executed because we have infinite loop
// alert('thank you!');

let input = '';
while (true) {
  input = prompt('input something');
  console.log(input);
}
