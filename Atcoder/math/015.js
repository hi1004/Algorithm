// 유클리드 알고리즘 최대공약수(GCD) 계산

// function euclideanAlgorithm(originalA, originalB) {
//   const a = Math.abs(originalA);
//   const b = Math.abs(originalB);

//   return b === 0 ? a : euclideanAlgorithm(b, a % b);
// }
// const nums = [15, 21, 3];
// const answer = nums.reduce((a, b) => euclideanAlgorithm(a, b));
// console.log(answer);

let ans = 0;
const regexp = /7/g;
for (let i = 7; i <= 7777777; i++) {
  if (i % 7 === 0 && i.toString().split('').includes('7')) {
    ans += i.toString().match(regexp).length;
  }
}
console.log(ans);
