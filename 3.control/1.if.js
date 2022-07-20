// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if(조건2) {} else {}
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('!!');
}

// falsy 값을 넣으면 출력되지 않는다.
if (0) {
  console.log('출력되면 안됨!');
}
