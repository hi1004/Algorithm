function solution(numbers) {
    const sortedNumbers = numbers.sort((a,b)=>a-b);
    var answer = sortedNumbers[numbers.length-1] *sortedNumbers[numbers.length-2]
    return answer;
}