function solution(s) {
  let answer = true;
  const str = s.toUpperCase();
  const stringArray = str.split("");
  const pCount = stringArray.filter((item) => "P" === item).length;
  const yCount = stringArray.filter((item) => "Y" === item).length;

  if (pCount !== yCount) answer = false;

  return answer;
}

/*
(풀이)
  주어진 문자열 s 를 대문자로 변경하고 split을 이용해
  각자의 알파벳으로 나누어진 배열로 만들어 준 뒤 filter함수를 이용하여
  해당하는 알파벳의 개수를 구하고 P 와 Y 의 length 가 동일하지 않을경우 에만
  answer 에 false를 넣어준다.
*/
