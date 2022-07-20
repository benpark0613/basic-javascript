// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? > null, undefined 인 경우만
// || > 값이 falshy한 경우 기본값 반환
let num1 = 0;
console.log(num1 || '-1'); // -1 : 0은 falshy
console.log(num1 ?? '-1'); // 0

let num2;
console.log(num2 || '-1'); // -1
console.log(num2 ?? '-1'); // -1
