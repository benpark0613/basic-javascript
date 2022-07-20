function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.resolve(`🎍=>🐔`);
  return Promise.reject(new Error('치킨을 가지고 올 수 없닭!'));
}

getChicken()
  .catch(() => '🐓') // (error) : 인자를 안쓰면 생략 가능
  .then(fetchEgg) // (chicken) => fetchEgg(chicken) : 전달하는 인자와 참조하는 인자가 같으면 생략하고 함수명만 적어도 된다.
  .then(fryEgg) // (egg) => fryEgg(egg)
  .then(console.log); // (friedEgg) => console.log(friedEgg)
