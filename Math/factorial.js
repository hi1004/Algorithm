// 재귀함수
function factorial1(number) {
  if (number === 1) return 1;
  return number * factorial1(number - 1);
}

console.log(factorial1(2));

// 반복문
function factorial2(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial2(5));
