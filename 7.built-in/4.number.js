const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

// 사용할 수 있는 정수의 가장 큰 값
// 1.7976931348623157e+308
// e+308 > 10^308
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_SAFE_INTEGER) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

const num4 = 1234.12;
console.log(num4.toFixed()); // 1234 반올림하여 문자열로 변환
console.log(num4.toString()); // 1234.12 문자열로 변환
console.log(num4.toLocaleString('ar-EG')); // ١٬٢٣٤٫١٢ 각 지역 숫자 표기법

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e+3 전체 자릿수 표기가 안될 때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 2.220446049250313e-16 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

// 10진수를 2진수로 변환한 후에 계산하고 다시 십진수로 변환한다.
// 이 과정에서 정확히 부동소수점 계산이 되지 않는다.
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003

function isEqual(original, expected) {
  return original === expected;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false

// 작은 차이를 무시하고 싶을 때
function isAlmostSame(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isAlmostSame(num, 0.1)); // true
