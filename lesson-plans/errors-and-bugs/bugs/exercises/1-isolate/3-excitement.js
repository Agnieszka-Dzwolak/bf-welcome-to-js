'use strict';

let text = null;
while (!text) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited += character + '!';
}

alert(excited);
