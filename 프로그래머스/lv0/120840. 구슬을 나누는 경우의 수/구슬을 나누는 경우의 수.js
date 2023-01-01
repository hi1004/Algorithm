function solution(balls, share) {
    var answer = 0;
    const factorial = n => {
        if(n<=1) return 1;
        return n * factorial(n-1);
    }
    
    answer = Math.round(factorial(balls)/(factorial(balls-share)* factorial(share)))
    return answer;
}