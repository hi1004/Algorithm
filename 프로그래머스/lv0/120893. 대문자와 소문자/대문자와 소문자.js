function solution(my_string) {
 
const answer = [...my_string].map(a => a.charCodeAt() >= 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a.toUpperCase()).join("")
 
    
    return answer;
}