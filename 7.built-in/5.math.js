// Math
// static properties
console.log(Math.E); // 오일러 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 파이

// static method
// 절대값
console.log(Math.abs(-10));
// 소수점 이하 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하 내림
console.log(Math.floor(1.4)); // 1
// 소수점 이하 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2
// 정수만 반환
console.log(Math.trunc(1.7)); // 1

// 최대, 최소값 찾기
console.log(Math.max(1, 3, 4));
console.log(Math.min(1, 3, 4));

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));
// 제곱근
console.log(Math.sqrt(9));

// 랜덤 값 반환
console.log(Math.random());
// 1~10 랜덤값
console.log(Math.floor(Math.random() * 10 + 1)); // +1 해주는 이유는 0이 나올 수 있어서
