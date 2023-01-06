function solution(phone_number) {
    var answer = phone_number.split('').splice(phone_number.length-4,4).join('')
    
    return '*'.repeat(phone_number.length-4) + answer;
}