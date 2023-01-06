function solution(a, b) {
    var answer = a.map((n,i) => n*b[i]).reduce((a,b)=>a+b,0)
 
    return answer;
}