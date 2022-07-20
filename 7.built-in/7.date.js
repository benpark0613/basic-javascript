// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 현재시간 2022-06-30T15:22:56.209Z
console.log(new Date('Jun 5, 2022')); // 2022-06-04T15:00:00.000Z
console.log(new Date('2022-12-17T03:24:00')); // 2022-12-16T18:24:00.000Z

console.log(Date.now()); // 1656602669822
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0 : 1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0 : 일요일
console.log(now.getTime()); // 1672501021401
console.log(now); // 2022-12-31T15:37:01.401Z

// console.log(now.toString()); // Sun Jan 01 2023 00:31:33 GMT+0900 (대한민국 표준시)
// console.log(now.toDateString()); // Sun Jan 01 2023
// console.log(now.toTimeString()); // 00:32:44 GMT+0900 (대한민국 표준시)
// console.log(now.toISOString()); // 2022-12-31T15:33:00.204Z ISO 8601 형식
// console.log(now.toLocaleString('en-US')); // 1/1/2023, 12:33:29 AM
// console.log(now.toLocaleString('ko-KR')); // 2023. 1. 1. 오전 12:33:51
