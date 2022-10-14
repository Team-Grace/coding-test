function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  return emergency.map((el) => sortedEmergency.indexOf(el) + 1);
}

/**
 * 풀이
 * 처음엔 [1, 1, 1] 배열을 만들고 숫자가 큰 순서대로 1씩 추가할까 생각했는데
 * 너무 복잡하고 아닌것 같다고 판단함.
 * 구글링을 해보니 간단하게 풀 수 있었다...오늘도 실패....
 *
 * [...emergency] 복사해주는 이유는 sort로 인해 배열이 바뀌었기 때문!
 */
