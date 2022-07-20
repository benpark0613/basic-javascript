// 클래스마다 공통된 속성이 있다면 상속을 사용하자.
// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹는다.');
//   }
//   sleep() {
//     console.log('잔다.');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹는다.');
//   }
//   sleep() {
//     console.log('잔다.');
//   }
//   play() {
//     console.log('논다.');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹는다.');
  }
  sleep() {
    console.log('잔다.');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모 클래스를 가리킨다.
    this.ownerName = ownerName;
  }
  // 오버라이딩 overriding
  eat() {
    super.eat();
    console.log('강아지가 먹는다.');
  }
  play() {
    console.log('논다.');
  }
}
const dog = new Dog('백구', '근근');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
