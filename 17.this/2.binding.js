// this 바인딩
// 자바, c#, c++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킨다.
// 정적으로 인스턴스가 만들어지는 시점에서 this가 결정된다.
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라진다.
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정된다.
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`야옹이 이름: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`멍멍이 이름: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName(); // 야옹이 이름: 냐옹
dog.printName(); // 멍멍이 이름: 멍멍

dog.printName = cat.printName;
dog.printName(); // 야옹이 이름: 멍멍
cat.printName(); // 야옹이 이름: 냐옹

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행!');
  printName();
}

printOnMonitor(cat.printName); // 야옹이 이름: undefined
