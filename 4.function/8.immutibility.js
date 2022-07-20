// function display(num) {
//   console.log(num);
// }
// const value = 4;
// display(value);

// 외부에서 주어진 인자의 값을 함수 내부에서 변경하는 것은 절대 안된다.
// 상태 변경이 필요한 경우에는, 새로운 상태(오브젝트, 값)를 만들어서 반환해야 한다.
// 원시값 > 값에 의한 복사
// 객체값 > 참조에 의한 복사 (메모리주소)

// 원시값은 Copy by Value > 함수 내부에서 값이 변경되어도 외부의 값이 변하지 않음
function display(num) {
  num = 5; // 쓰레기
  console.log(num); // 5
}
const value = 4;
display(value);
console.log(value); // 4

// 객체값은 Copy by Reference > 함수 내부에서 값이 변경되면 외부의 값도 변경된다.
function displayObj(obj) {
  obj.name = 'Bob'; // 💥💥💥💥💥 외부로부터 주어진 인자(오브젝트)를 내부에서 변경해선 절대로 안된다.💥💥💥💥💥💥
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);

// 인자의 값을 바꿔야 한다면, 함수 이름을 '바꾼다'는 의미로 명확하게 해야하고,
// 주어진 인자의 값은 그대로 두고 '새로운 오브젝트를 만들어 반환'해야 한다.
function changeName(obj) {
  return { ...obj, name: 'Bob' };
}
