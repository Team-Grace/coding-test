function solution(s, n) {
  let answer = "";

  answer = s
    .split("")
    .map((item) => {
      if (item === " ") {
        return " ";
      }
      const charCode = item.charCodeAt();
      return item.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(charCode + n - 26)
        : String.fromCharCode(charCode + n);
    })
    .join("");

  return answer;
}

/*
(풀이)
문자열 s를 split을 통해 배열을 만들어주고, 빈 문자열인 경우에는 빈 문자열을 리턴해준다. 
for문으로 주어진 문자열을 하나씩 돌면서 
아스키코드로 변환. (charCodeAt메소드)

변환 후, 아스키코드의 범위가 65 ~ 90일 때는 대문자이고 97 ~ 122일 때는 소문자이다.
이 범위에 들어올때는 n만큼 더하고 각각 90, 122를 초과하면 문자가 처음부터 다시 돌아가는것이기때문에 -26을 해준다.

처리한 아스키코드를 다시 문자열로 돌리는 fromCharCode메소드를 사용해서 변환 후, answer에 넣는다.
*/
