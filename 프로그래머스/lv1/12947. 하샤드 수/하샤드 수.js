function solution(x) {
    var answer = true;
    const sum = x.toString().split('').map(Number).reduce((a,b)=>a+b,0)
    answer = x%sum === 0 ? true : false;
    
    return answer;
}