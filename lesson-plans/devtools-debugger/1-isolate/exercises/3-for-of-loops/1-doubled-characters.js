'use strict';

// debugger;

// let text = null;
// while (text === null) {
//   text = prompt('enter some text, each character will be doubled:');
// }

// let doubled = '';
// for (let nextChar of text) {
//   doubled = doubled + nextChar + nextChar;
// }

// alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
// debugger;

// let input = null;
// while (input === null) {
//   input = prompt('enter some text, after character will be a hyphen:');
// }

// let hyphened = '';
// for (let char of input) {
//   hyphened = hyphened + char + '-' + hyphened + '-' + char;
// }

// alert(hyphened);
let text = null;
while (text === null) {
  text = prompt('enter some text, after character will be a hyphen:');
}

let hyphenAfter = '';
for (const char of text) {
  hyphenAfter += char + '-';
}

//alert(hyphenAfter);

let hyphenBetween = '';
for (const char of text) {
  hyphenBetween += char + '-';
}

// we need to get rid of the last hyphen
// substring(start index, end index), the end index is not included
hyphenBetween = hyphenBetween.substring(0, hyphenBetween.length - 1);

alert(hyphenBetween);
