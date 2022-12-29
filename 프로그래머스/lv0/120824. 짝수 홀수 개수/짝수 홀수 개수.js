function solution(num_list) {
    const odd = num_list.filter(n=>n%2 !== 0).length
    const even = num_list.filter(n=>n%2 === 0).length
    var answer = [even, odd];
    return answer;
}