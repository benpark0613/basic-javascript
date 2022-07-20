// 퀴즈
// num의 숫자가 짝수면 '짝수', 홀수면 '홀수'
let num = 2;

// if
if (num % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

// ternary
num % 2 === 0 ? console.log('짝수') : console.log('홀수');

let result = num % 2 === 0 ? '짝수' : '홀수';
console.log(result);
