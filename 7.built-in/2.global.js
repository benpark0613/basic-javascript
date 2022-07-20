// 자바스크립트에서 this는 전역 객체를 가리킨다.
// 노드에서 this는 현재 모듈에 있는 정보를 가리킨다.
console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특문은 이스케이프 처리해야 한다.
const URL = 'https://근근.com';
const encoded = encodeURI(URL);
console.log(encoded); // https://%EA%B7%BC%EA%B7%BC.com

const decoded = decodeURI(encoded);
console.log(decoded); // https://근근.com

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '근근.com';
console.log(encodeURIComponent(part)); // %EA%B7%BC%EA%B7%BC.com
