// 접근제어자 - 캡슐화
// 클래스 내부에서만 사용할 수 있도록 만드는 방법
// private(#), public(기본), protected
class Fruit {
  #name; // 필드, 생성자에서 주어지는 값이면 생략이 가능하다.
  #emoji;
  #type = '과일'; // 인스턴스를 만들 때 초기화가 되어야 한다면 생성자 밖에서 설정하면 된다.
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}:${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple); // Fruit {}
