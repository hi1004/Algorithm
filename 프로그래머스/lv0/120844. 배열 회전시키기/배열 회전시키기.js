function solution(numbers, direction) {
 
    if(direction === 'right') {
       const popNum = numbers.pop();
        numbers.unshift(popNum)
    } else {
        const shiftNum = numbers.shift();
        numbers.push(shiftNum)
    }
    return numbers;
}