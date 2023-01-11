function solution(strings, n) {
    var answer = strings.sort(
       (a,b)=>(a.charCodeAt(n)-b.charCodeAt(n)) == 0 ?   // n번째의 문자를 아스키코드로 비교
       (a > b ? 1 : -1) :                               // 문자가 같을경우, 사전순 나열을 위한 비교
       (a.charCodeAt(n)-b.charCodeAt(n)))               // 다를경우, n번째 문자만 기분으로 정렬
    return answer;
}