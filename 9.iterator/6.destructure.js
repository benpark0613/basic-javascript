// 구조 분해 할당 destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍏', '🥝', '🥭', '🍌'];
const [first, second, ...others] = fruits;
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // [ '🥭' , '🍌' ]

const point = [1, 2];
// 기본값 주기
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
const [title, emoji] = createEmoji();
console.log(title); // apple
console.log(emoji); // 🍎

const ellie = { name: 'Ellie', age: 20, job: 'engineer' };
// function display(person) {
//   console.log('이름', person.name);
//   console.log('나이', person.age);
//   console.log('직업', person.job);
// }
function display({ name, age, job }) {
  console.log('이름', name); // 이름 Ellie
  console.log('나이', age); // 나이 20
  console.log('직업', job); // 직업 engineer
}
display(ellie);

// 키 값을 변경해줄 수도 있다.
const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

console.clear();

// quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
