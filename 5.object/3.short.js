// 키 이름과 참조하는 변수의 이름이 동일한 경우
// 객체를 간략하게 만들 수 있다.
const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name, // name: name,
    age, // age: age,
  };
}
