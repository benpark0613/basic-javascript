function loop() {
  const array = [];
  // var와 let의 차이점
  // for (var i = 0; i < 5; i++) { // 5 5 5 5 5
  for (let i = 0; i < 5; i++) { // 0 1 2 3 4
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
