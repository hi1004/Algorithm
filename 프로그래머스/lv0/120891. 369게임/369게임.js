function solution(order) {
    var answer = 0;
    const regex = /[3,6,9]/g
    
    for(let i = 0; i<order.toString().length; i++) {
        if(order.toString()[i] === '3' || order.toString()[i] === '6' || order.toString()[i] === '9') answer++
    }
    return answer;
}