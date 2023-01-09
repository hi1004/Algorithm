function solution(price, money, count) {
    var answer = -1;
    let m = 0;
    for(let i =1; i<=count; i++) {
        m += i*price
    }
    answer = m > money ? m-money : 0

    return answer;
}