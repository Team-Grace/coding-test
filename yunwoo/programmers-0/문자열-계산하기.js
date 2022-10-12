function solution(my_string) {
  return eval(my_string);
}

function solution(my_string) {
  let result = 0;

  my_string = my_string.split(" ").filter((v) => v !== "+");

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === "-") {
      result -= parseInt(my_string[i + 1] * 2);
    } else {
      result += parseInt(my_string[i]);
    }
  }

  return result;
}

/*
(풀이)
1. eval 메서드를 이용해 문자열을 계산

2. 공백으로 요소를 나눠주고 filter로 + 를 제외한 나머지를 재할당
for 문을 돌려 -일 경우만 현재 인덱스+1 요소를 result에 2배로 빼주고
일반 숫자 요소일때는 더해준다.
 */
