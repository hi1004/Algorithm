function solution(n) {
    var answer = [];
    
    function isPrime(num) {
        if(num === 2) return num;
        for(let i = 2; i<=Math.floor(Math.sqrt(num)); i++) {
            if(num%i === 0) return false;
        }
        return num;
    }
    
    for(let i = 2; i<=n; i++) {
    
        if(n%isPrime(i) === 0) {
            answer.push(isPrime(i))
        } 
    }
    return answer;
}