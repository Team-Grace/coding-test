function solution(sizes) {
  const maxSizes = Math.max(...sizes.flat());
  let secondMaxSizes = 0;

  for (el of sizes) {
    if (el[0] > el[1]) {
      if (el[1] > secondMaxSizes) {
        secondMaxSizes = el[1];
      }
    } else {
      if (el[0] > secondMaxSizes) {
        secondMaxSizes = el[0];
      }
    }
  }

  return maxSizes * secondMaxSizes;
}

/*
(풀이)
배열을 펼쳐서 최대값을 구해주고 0,1 번째 인덱스로 나누어 2차 배열의 두 요소중
작은 값을 변수에 재 할당하여 작은값들 중 제일 큰값을 구해줬다.
*/
