function solution(n) {
    var answer = n.toString().split('').map(s=>Number(s)).reduce((a,b)=>a+b,0)
    return answer;
}