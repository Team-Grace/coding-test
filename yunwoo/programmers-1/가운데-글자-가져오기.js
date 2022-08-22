function solution(s) {
  const middleStrIndex = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.substring(middleStrIndex - 1, middleStrIndex + 1)
    : s.substring(middleStrIndex, middleStrIndex + 1);
}

/*
(풀이)
문자열 s의 length를 반으로 나누어 변수에 저장하고
index를 기준으로 문자열을 잘라내는 substring(start, end) 내장메서드를 이용해
s.length가 짝수일 경우 가운데 2개의 문자열, 홀수일 경우 가운데 문자열 1개를 반환한다.

**substring은 end의 이전까지 반환하므로 ex ) 'asdfg' 에서 asd 까지 반환하고 싶다면 substring(0,3)이 되어야 한다.
*/
