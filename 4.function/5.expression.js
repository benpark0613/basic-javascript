// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}

let add = function (a, b) {
  // 표현식으로 사용되는 함수는 주로 익명함수로 사용한다.
  // 함수의 이름을 지을 수 있지만 외부에서 접근할 수 없다.
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); >>> 객체편

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('🍕');
})();
