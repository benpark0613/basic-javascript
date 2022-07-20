// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);

console.log(2 == '2');
console.log(2 === '2'); // 이걸 많이 쓴다.

console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};
console.log(obj1 == obj2); // false, 참조하는 메모리 주소가 다르기 때문
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);
let obj3 = obj2;
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true
