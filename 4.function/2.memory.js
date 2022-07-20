// 함수 이름 자체는 함수를 가리키고 있는 변수와 동일하다.
// 함수의 이름을 어딘가에 할당한다는 것은 함수를 저장한 메모리 주소를 복사하는 것이다.
// 함수를 호출하려면 소괄호를 이용해야 한다.

function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
