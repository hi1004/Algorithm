function solution(a, b) {
    
    var answer = Array.from({length: Math.abs(a-b)+1},(n,i)=>Math.min(a,b)+i).reduce((a,b)=>a+b,0)
    return answer;
}