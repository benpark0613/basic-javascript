const obj = {
  name: '엘리',
  age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때, 대괄호 표기법을 사용한다.
function getValue(obj, key) {
  // return obj.key; obj 안에 key라는 이름의 key가 없기 때문에 접근하지 못한다.
  return obj[key]; // key는 정해져있지 않다. 동적이다.
}
console.log(getValue(obj, 'name'));

// 동적으로 객체에 작업을 해야하는 경우, 대괄호 표기법을 사용하자.
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'age');
console.log(obj);
