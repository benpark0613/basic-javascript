// Symbol 심볼
// 유일한 키를 생성할 수 있음
// 문자열이 똑같아도 유니크한 키를 생성할 수 있다.
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');
// console.log(map.get(key2)); // 원시타입이라 같은 키로 인식함
// console.log(key1 === key2); // true

const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false : 심볼은 유일하기 때문에 두 개의 key는 다르다.

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심볼 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

console.log(Symbol.keyFor(k1)); // key 심볼의 해당 문자열을 알고 싶을 때
console.log(Symbol.keyFor(key1)); // undefined 전역 심볼 레지스트리에 등록된 키만 확인할 수 있다.

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined : obj에서 symbol과 log의 symbol은 다르다.
