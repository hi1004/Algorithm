function solution(a, b) {
    var answer = 0;
    const gcd = (a,b) => b === 0 ? a : gcd(b,a%b)
    const resA = a/gcd(a,b)
    const resB = b/gcd(a,b);
 
    
    const primeFactors = n => {
  n = Math.abs(n);
  const answer = [];
  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  if (n > 2) answer.push(n);
  return answer;
};

    if(primeFactors(resB).filter(n=> !(n===2 || n=== 5)).length === 0 || resA === resB) {
        answer = 1;
    } else {
        answer = 2;
    }
  
    
    return answer;
}