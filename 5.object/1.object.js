// object를 만드는 방법
// 1. Object literal {key: value}
// 2. new Object()
// 3. Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
  name: 'apple',
  'hello-bye': '❤', // 키값에 특수문자를 써야할 때 문자열 형태로 써야한다. 이렇게 쓰지말자.
  0: 1,
  ['hello-bye1']: '😘',
};

// 속성, 데이터에 접근하는 방법
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation, 항상 대괄호 안에 문자열로 표기한다.
console.log(apple['name']);

// 속성 추가
apple.emoji = '😪';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
