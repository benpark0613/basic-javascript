// 옵셔널 체이닝 연산자 (Optional Chaining Operator)
// ES11 (ECMAScript 2020)

// ?.
// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item?.price;
console.log(price); // 1

let obj = { name: '🐶', owner: { name: '근근' } };
function printName1(obj) {
  const ownerName = obj.owner.name; // obj && obj.owner && obj.owner.name
  console.log(ownerName); // 1
}
// printName1(); // crashed : 없는 것에 접근하려고 하니까.

function printName2(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName); // 1
}

printName2(); // undefined
printName2(obj); // 근근
