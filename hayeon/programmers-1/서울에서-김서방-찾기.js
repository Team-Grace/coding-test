function solution(seoul) {
  const kimIdx = seoul.indexOf("Kim");

  return `김서방은 ${kimIdx}에 있다`;
}

/*
풀이

배열에서 'Kim' 이라는 값의 인덱스 값을 추출해야함
이 때, for..of 랑 for..in 이 생각이 났는데 적절하지 않다는 것 결론
예전에 노션에 정리했던 메서드들을 살펴보니 indexOf()로 인덱스값을 받을 수 있다는 것 발견!
생각보다 쉬운 문제였음!

*/
