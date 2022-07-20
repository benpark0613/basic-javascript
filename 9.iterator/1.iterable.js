// Iterable 하다는 것은 순회가 가능하다는 뜻이다.
//
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체라는 걸 뜻한다.
//
// 순회가 가능하면 > for ... of, spread 가 가능하다.
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

/* 
    // TypeError: obj is not iterable
    const obj = { 0: 1, 1: 2 };
    for (const item of obj) {
    console.log(item);
    }
 */
// 객체는 for ... in 사용 가능하다.
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item); // key를 출력
}

const iterator = array.values();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // value: undefined, done: true

// const iterator = array.values();
// while (true) {
//   const item = iterator.next();
//   if (item.done) break;
//   console.log(item.value);
// }
