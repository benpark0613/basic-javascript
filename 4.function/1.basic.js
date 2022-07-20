// 사용예제1
function sum(a, b) {
  console.log('function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

let lastName = '김';
let firstName = '정은';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));
