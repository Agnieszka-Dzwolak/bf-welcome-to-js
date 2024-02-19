'use strict';

// let input = prompt('enter your name:');

// let greeting = '';
// if (input === null) {
//   greeting = 'hello anonymous.';
// } else {
//   greeting = 'hello ' + input + '!';
// }

// alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

// debugger;

// let fullName = prompt('enter your full name:');

// let welcome = '';
// if (fullName === null) {
//   welcome = 'hello anonymous';
// } else {
//   welcome = 'hello ' + fullName + '!';
// }

// alert(welcome);

let firstName = prompt('enter your first name');
let lastName = prompt('enter your last name');

let greeting = '';

if (firstName && lastName) {
  greeting = `Hello ${firstName} ${lastName}`;
} else {
  greeting = 'Hello anonymous';
}
alert(greeting);
