function solution(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }
  return result;
}

/**
 * 풀이
 * 공백을 다 포함해서 짝수일 때 대문자로 바꾸는 것이므로
 * 인덱스가 짝수이면 대문자로 바꿔서 값을 넣어주고 아니면 소문자 그대로 넣는다.
 * map을 이용해서도 풀 수 있을것 같은데..
 */
