function solution(n) {
    var answer = Math.floor(n/7)
    if(n%7) {
        answer = Math.floor(n/7)+1
    } 
    return answer;
}