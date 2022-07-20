// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (고전적인 방법)
// 2. 클래스 (최신)

// 생성자 함수
// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}:${this.emoji}`);
//   };
// }

// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'eillie' };
