function solution(i, j, k) {
    var answer = 0;
    
    for(;i<=j; i++) {
 
        answer += i.toString().split('').map(Number).filter(n=>n === k).length
    }
    return answer;
}