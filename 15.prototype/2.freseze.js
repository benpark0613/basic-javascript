// Object.freeze (동결) : 추가X, 삭제X, 쓰기X, 속성 재정의X
// (단, 얕은 동결이 된다.)
const guen = { name: '근근' };
const dog = { name: '와우', emoji: '🐶', owner: guen };

Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '근근' } }
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

guen.name = '근성';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '근성' } }

// Object.seal (밀봉) : 값 수정O, 키 추가X, 키 삭제X, 속성 재정의X
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: '근성' } }
delete cat.emoji;
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: '근성' } }

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// Object.preventExtensions (확장금지) : 추가X
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger); // { name: '어흐응' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 1;
console.log(tiger); // {}
