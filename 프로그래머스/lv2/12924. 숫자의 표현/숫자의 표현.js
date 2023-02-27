function solution(n) {
    var answer = 0;
    let count = 0;
    let sum = 0;
     for (let i = 1; i <= n; i++) {
        let sum = 0
        for (let j = i; j <= n; j++) {
            sum += j
          
            if (sum >= n) {
                if (sum === n) count++
                break
            }
        }
    }
      
    return count;
}