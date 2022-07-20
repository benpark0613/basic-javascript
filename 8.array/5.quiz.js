// 퀴즈1
// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하면 안된다.
// input: ['🍌', '🍓', '🍇', '🍓'];
// output: ['🍌', '🥝', '🍇', '🥝']
function replace(array) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === '🍓') {
      replaced[i] = '🥝';
    }
  }
  return replaced;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result1 = replace(array);
console.log(result1); // [ '🍌', '🥝', '🍇', '🥝' ]

// 재사용성 높이기
function replace2(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const result2 = replace2(array, '🍓', '🍌');
console.log(result2); // [ '🍌', '🍌', '🍇', '🍌' ]

// 퀴즈2
// 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝')); // 2

// 퀴즈3
// 배열1, 배열2 두 개의 배열을 전달받아서
// 배열1 아이템 중 배열 2에 존재하는 아이템만 담고 있는 배열을 반환하는 함수 만들기
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])); // [ '🍌', '🍇' ]
