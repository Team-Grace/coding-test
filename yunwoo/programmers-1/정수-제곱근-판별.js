function solution(n) {
  const squareRoot = Math.sqrt(n);

  return Number.isInteger(squareRoot)
    ? (squareRoot + 1) * (squareRoot + 1)
    : -1;
}

/*
(풀이)
제곱근 메소드를 쓰고 그 값이 정수인지 확인한 뒤 맞으면 그값에 +1 한 두값을 곱해서 제출
정수가 아니면 -1 제출
*/
