const text = 'hello';
function func(params) {
  console.log(text);
}
func();

// 클로저에 의해서 함수가 리턴이 될 때 함수 뿐만 아니라 
// 함수 외부에 있는 아우터 렉시컬 환경도 함께 묶여서 반환된다.
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
