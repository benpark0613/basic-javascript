// 내부 정보를 은닉하고, 공개함수(public, 외부)를 통한 데이터 조작을 위해 사용한다. (캡슐화, 정보은닉)
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일하다. (예전에는 클래스가 없어서 이렇게 사용했다.)
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
