function solution(s) {
  return Number(s);
}

/*
(풀이)
Number를 이용해 타입을 변경해줬다.
parseInt 는 권장하지 않는다는데 이유는 모르겠다.
+s <- 이런식으로 해도 형변환이 이루어지는데 문자열과 숫자의 사칙연산은 숫자가 나오기 때문.
*/
