const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // 2
console.log(text.indexOf('Q')); // -1
console.log(text.lastIndexOf('l')); // 9

console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false
console.log(text.includes('H')); // true

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

const space = '          space           ';
console.log(space.trim());

const longText = 'Get to the, point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the,', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]
console.log(longText.split(',')); // [ 'Get to the', ' point' ]
