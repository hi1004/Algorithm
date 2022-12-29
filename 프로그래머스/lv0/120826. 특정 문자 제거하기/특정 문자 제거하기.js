function solution(my_string, letter) {
    const regex = new RegExp(letter,'g')
    const answer = my_string.replace(regex, '')
    return answer;
}