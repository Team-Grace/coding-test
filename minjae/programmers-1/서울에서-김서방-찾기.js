function solution(seoul) {
  const kimIdx = seoul.indexOf("Kim");
  return `김서방은 ${kimIdx}에 있다`;
}

/*
  (풀이)
  seoul이라는 배열에서 'Kim' 요소의 인덱스를 찾는 문제기 때문에 indexOf 메서드를 이용해서 풀었다. 반환 할 때는 템플릿 리터럴을 이용했다
*/
