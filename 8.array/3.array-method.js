// 배열의 함수들
// POINT : 배열 자체를 변경하는지, 새로운 배열을 반환하는지

/* 
    배열 자체를 수정(업데이트) 
*/
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));

// 배열 안에 특정한 이이템이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑');
console.log(fruits); // [ '🍌', '🍎', '🍋', '🍑' ]
console.log(length); // 4

// 추가 - 제일 앞
length = fruits.unshift('🍓');
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍋', '🍑' ]
console.log(length); // 5

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍋' ]
console.log(lastItem); // 🍑

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits); // [ '🍌', '🍎', '🍋' ]
console.log(lastItem); // 🍓

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); // [ '🍌', '🍋' ]
console.log(deleted); // [ '🍎' ]
fruits.splice(1, 1, '🍎', '🍓');
console.log(fruits); // [ '🍌', '🍎', '🍓' ]

/* 
    새로운 배열 반환
*/
// 잘라진 새로운 배열을 반환
let newArr = fruits.slice(0, 2);
console.log(newArr); // [ '🍌', '🍎' ]
console.log(fruits); // [ '🍌', '🍎', '🍓' ]
newArr = fruits.slice(-1);
console.log(newArr); // [ '🍓' ]

// 여러 개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

console.clear();
// 중첩 배열을 하나의 배열로 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6, [Array] ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6, [ 3, 4 ] ] ] : 기본적으로 한 단계까지만 풀어준다.
console.log(arr.flat(3)); // [ 1, 2, 3, 4, 5, 6, 3, 4 ]
arr = arr.flat(3);

// 특정한 값으로 배열 채우기
// fill은 배열 자체를 수정
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0, 0, 0 ]
arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0, 0, 0, 0, 0 ]
arr.fill('a', 1);
console.log(arr); // [ 0, 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]

// 배열을 문자열로 합치기
let text = arr.join();
console.log(text); // 0,a,a,a,a,a,a,a
text = arr.join(' | ');
console.log(text); // 0 | a | a | a | a | a | a | a
