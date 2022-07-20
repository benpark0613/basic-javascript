// export let count = 0; 변수를 export하는 것은 좋지 않다.
let count = 0;
// export default function increase() {
//   count++;
//   console.log(count);
// }

export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
