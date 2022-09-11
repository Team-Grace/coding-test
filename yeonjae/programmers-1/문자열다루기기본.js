function solution(s) {
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  } else {
    let checkStr = s.split("");
    for (let i = 0; i < checkStr.length; i++) {
      if (isNaN(checkStr[i])) {
        return false;
      }
    }
  }
  return true;
}

/*
(풀이)
먼저 1차적으로 문자열s의 길이가 4 또는 6이아니면 false로 체크해주고
문자열을 모두 체크하기위해 split를 사용해 배열로 만들어준 후,
for문을 통해 돌면서 숫자만있으면 true
숫자가 아닌요소가 하나라도있으면 false를 리턴해주었다.
*/
