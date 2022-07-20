const dog = {
  name: '멍멍',
  emoji: '🐶',
};

console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ '멍멍', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', '멍멍' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // true
console.log(dog.hasOwnProperty('name')); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장된다.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// {
//   name: { value: '멍멍', writable: true, enumerable: true, configurable: true },
//   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc); // { value: '멍멍', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
  value: '왕왕',
  writable: false, // 값을 수정할 수 없음
  enumerable: false, // 열거할 수 없음
  configurable: false, // 키를 수정할 수 없음
});
console.log(dog.name);
console.log(Object.keys(dog)); // [ 'emoji' ]
delete dog.name;
console.log(dog.name); // 왕왕

const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
