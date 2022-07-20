// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

// 제너레이터에서 next()를 호출하면 가장 가까운 yield <value>문을 만날 때까지 실행한다.
// 반복의 여부를 사용자에게 넘긴다.
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2; // yield는 사용자가 next를 호출해야 다음 값을 반환한다.
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

// multiple.return(); // undefined true 끝낸다.
// multiple.throw('Error!'); // app crashed

next = multiple.next();
console.log(next.value, next.done); // 1 false
