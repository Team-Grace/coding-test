function solution(dots) {
  return getCommonDifference(dots, 0) * getCommonDifference(dots, 1);
}

function getCommonDifference(arr, idx) {
  const max = Math.max.apply(
    null,
    arr.map((el) => el[idx])
  );

  const min = Math.min.apply(
    null,
    arr.map((el) => el[idx])
  );

  return max - min;
}

/*
(풀이)
배열과 인덱스값을 받아 최대값과 최소값을 구하여 최대값에서 최소값을 뺀 공차를 반환해주는 함수를 만들고
가로 세로의 인덱스 값을 넣어 나온 반환값 2개를 곱해주면 넓이가 나온다.
*/
