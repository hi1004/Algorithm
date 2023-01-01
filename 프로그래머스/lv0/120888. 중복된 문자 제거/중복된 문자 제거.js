function solution(my_string) {
 
    const set = [...new Set(my_string.split(''))].join('')

    return set;
}