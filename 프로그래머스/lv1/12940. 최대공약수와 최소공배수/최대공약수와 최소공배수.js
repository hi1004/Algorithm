function solution(n, m) {
   
    const gcd = (a,b) => b === 0 ? a : gcd(b,a%b) 
    const lcm = (a,b) => a === 0 || b === 0 ? 0 : a*b / gcd(a,b);
  
    return [gcd(n,m), lcm(n,m)];
}