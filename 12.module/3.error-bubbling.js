// Bubbling up, Propagating
// 에러는 최종적으로 호출한 곳으로 전파된다.
function a() {
  throw new Error('error!');
}

// 에러를 중간에 잡을 수 있고, 다시 던질 수도 있다.
function b() {
  try {
    a();
  } catch (error) {
    console.log('이 에러는 여기서 핸들링 할 수 없군!');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched');
}
console.log('done');
