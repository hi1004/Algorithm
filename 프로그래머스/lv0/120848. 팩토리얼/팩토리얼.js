function solution(n) {
    var answer = 0;
    
    function factorial(num) {
        if(num <= 1) return 1;
        return num * factorial(num-1);
    }

    for(let i = 1; i<=n; i++) {
       
        if(factorial(i) <= n) {
            answer = i
        } else {
            break;
        }
    }
    return answer;
}