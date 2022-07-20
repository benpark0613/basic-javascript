// 퀴즈1
// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하면 안된다.
// input: ['🍌', '🍓', '🍇', '🍓'];
// output: ['🍌', '🥝', '🍇', '🥝']
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 퀴즈2
// 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개 있는지 카운트 하는 함수 만들기
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2
function count(array, item) {
  /*   고차함수 안에서 조건문, 반복문, 변수사용, 데이터 변경은 지양해야 한다.
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0); */
  return array.filter((value) => value === item).length;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3
// 배열1, 배열2 두 개의 배열을 전달받아서
// 배열1 아이템 중 배열 2에 존재하는 아이템만 담고 있는 배열을 반환하는 함수 만들기
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']
function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 퀴즈4
// 5 이상 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums
  .filter((num) => num > 5) // [ 16, 25, 34, 21 ]
  // 코드에서 사용하지 않는 인자는 표시가 된다. 사용하지 않는 코드는 밑줄처리 해줄 수 있다.
  // .reduce((avg, num, index, array) => avg + num / array.length, 0);
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2); // 24
