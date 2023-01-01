function solution(price) {
    let answer = 0
    if(price >= 500000) {
        answer = Math.floor(price-price * 0.2)
    } else if(price >= 300000) {
        answer = Math.floor(price-price * 0.1)
        
    } else if(price>= 100000&& price >= 10) {
        answer = Math.floor(price- price * 0.05)   
    } else {
        answer = price
    }
    return answer;
}