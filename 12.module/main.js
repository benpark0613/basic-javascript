// 기본적으로 브라우저 상에서 js 파일은 서로 확인할 수 있다.
// 값이 꼬여서 버그가 발생할 수 있다. 때문에 모듈화를 한다.
// import increase1 from './counter.js'; // 받아온 js 이름을 바꿔서 사용할 수도 있다.
// increase1();
// increase1();
// console.log(count);
// count = -10;
// console.log(count);

// import { increase as increase1 } from './counter.js';
// // increase();
// // increase();
// increase1();
// increase1();

// import { increase, getCount, count } from './counter.js';
import * as counter from './counter.js';
counter.increase();
counter.increase();

const count = counter.getCount();
console.log(count);
