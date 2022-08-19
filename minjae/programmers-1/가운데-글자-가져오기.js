function solution(s) {
  const midIdx = Math.floor(s.length / 2);

  return s.length % 2 === 1
    ? s.slice(midIdx, midIdx + 1)
    : s.slice(midIdx - 1, midIdx + 1);
}

/*
  (풀이)
  1. 문자열의 가운데 인덱스를 Math.floor를 통해서 찾는다.
  2. 만약 s의 길이가 짝수, 홀수에 따라서 잘라줘야하는 길이가 다르기 때문에 삼항 연산자로 상황에 맞게 잘라주고 잘라준 문자열을 리턴한다.
*/
