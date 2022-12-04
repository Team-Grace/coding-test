function solution(dartResult) {
  const numArr = [0, 0, 0];
  let point = -1;

  for (let i = 0; i < dartResult.length; i++) {
    if (Number.isInteger(dartResult[i] * 1)) {
      point++;

      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        numArr[point] += 10;
        i++;
      } else numArr[point] += dartResult[i] * 1;
    } else {
      if (dartResult[i] === "D") numArr[point] **= 2;
      else if (dartResult[i] === "T") numArr[point] **= 3;
      else if (dartResult[i] === "*") {
        numArr[point] *= 2;
        numArr[point - 1] *= 2;
      } else if (dartResult[i] === "#") numArr[point] *= -1;
    }
  }
  return numArr.reduce((a, b) => a + b);
}

/**
 * 풀이
 * 혼자 풀기에 어렵고 좀 복잡했다. 처음에 접근을 너무 복잡한 방식으로 시작했던 것 같다.
 * 점수를 저장할 배열을 만들고 numArr의 현재 인덱스 위치를 -1로 초기화 시켰다.
그다음에 dartResult의 문자가 숫자인지 또는 문자인지 검사를 하게 해야하는데
숫자일때 1을 증가시켜 새로운 위치로 가게한다.
한자리수일땐 그 숫자를 넣고, 두자리수일땐 10을 넣는다.
그외의 문자일 경우 각각에 따라 값을 제곱해주거나 곱해준다.
마지막으로 배열의 모든 값을 더해주고 값을 반환한다.
정규표현식으로는 풀지 못했다.....
 */
