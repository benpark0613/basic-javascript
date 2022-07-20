// 논리연산자 Logical Operator
// && 그리고, || 또는

// 단축평가 : short-circuit evaluation
// 조건문 밖에서는 단축평가 후 마지막 값을 반환한다.
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Guen' };

if (obj1 || obj2) {
  console.log('둘 다 true');
}

let result = obj1 && obj2;
console.log(result); // { name: '🐱', owner: 'Guen' }
result = obj1 || obj2;
console.log(result); // { name: '🐶' }

// 활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없다.');
  }
  animal.owner = '바뀐 주인';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있다.');
  }
  animal.owner = '새로운 주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: '🐶' }
console.log(obj2); // { name: '🐱', owner: '바뀐 주인' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: '🐶', owner: '새로운 주인' }
console.log(obj2); // { name: '🐱', owner: '바뀐 주인' }

// null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
const price = item && item.price;
console.log(price); // undefined

// 기본값 설정
// || > 값이 falshy한 경우 기본값 반환 (0, -0, null, undefined, '')
// default parameter > 전달하지 않거나, undefined 인 경우에만 기본값 반환
function print1(message) {
  const text = message || 'Hello';
  console.log(text);
}
print1(); // Hello
print1(undefined); // Hello
print1(null); // Hello
print1(0); // Hello

function print2(message = 'Hi') {
  console.log(message);
}
print2(); // Hi
print2(undefined); // Hi
print2(null); // null
print2(0); // 0
