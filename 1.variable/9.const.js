// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 오류

// 1. 상수
const MAX_FRUITS = 5; // 상수 변수명은 대문자, 언더바 사용

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; 오류

// const가 가리키는 메모리주소를 변경할 수 없지만
// object가 가리키는 object의 값은 변경이 가능하다.
console.log(apple);
apple.name = 'orange';
apple.display = '🍊';
console.log(apple);
