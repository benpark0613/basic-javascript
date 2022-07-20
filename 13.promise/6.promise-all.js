function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 순차적으로 바나나를 가져오고 사과를 가져온다.
// 시간이 오래 걸린다. 병렬적으로 promise를 사용할 수 있다.
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// // Promise.all 병렬적으로 한번에 모든 Promise들을 실행
// Promise.all([getBanana(), getApple()]) //
//   .then((fruits) => console.log('all', fruits));

// // Promise.race 주어진 Promise 중에 제일 빨리 수행된 것만 반환
// Promise.race([getBanana(), getApple()]) //
//   .then((fruits) => console.log('race', fruits));

// // crashed : 성공했을 때만 결과를 가져온다.
// Promise.all([getBanana(), getApple(), getOrange()]) //
//   .then((fruits) => console.log('all-error', fruits))
//   .catch(console.log);

// // 모든 결과를 가져온다.
// Promise.allSettled([getBanana(), getApple(), getOrange()]) //
//   .then((fruits) => console.log('all-settle', fruits))
//   .catch(console.log);
