function solution(score) {
  const result = Array.from({ length: score.length }, () => 1);
  const sumAverageArray = score.map((v) => (v[0] + v[1]) / 2);

  for (let i = 0; i < sumAverageArray.length; i++) {
    for (let j = 0; j < sumAverageArray.length; j++) {
      if (sumAverageArray[i] < sumAverageArray[j]) result[i]++;
    }
  }

  return result;
}

/*
(풀이)
학생의 수 만큼 1을 가진 배열을 만들고 주어진 점수를 합산하고 평균을 낸 배열을 만든 다음
for문으로 각 요소마다 배열의 전체를 순회돌면서 타겟값보다 큰 값이 있을경우 result 배열의 해당 위치에 1씩 증가시켜준다.
 */
