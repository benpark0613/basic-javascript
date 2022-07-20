// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // 프로퍼티로 fullName을 정할 경우, 업데이트 되지 않는다.
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }
  // 행동이 아니라 속성에 가깝다면 getter를 사용한다.
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
// fullName() 은 행동이라기 보다는 객체의 상태에 가깝다.
// 함수라고 하기에는 애매하다.
// console.log(student.fullName());
console.log(student.fullName);
student.fullName = '김철수';
