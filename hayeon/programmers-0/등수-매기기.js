function solution(score) {
  const sumArr = [];

  for (let i = 0; i < score.length; i++) {
    let sum = 0;

    for (let j = 0; j < score[i].length; j++) {
      sum += score[i][j];
    }
    sumArr.push(sum);
  }

  const sortedScore = [...sumArr].sort((a, b) => b - a);

  return sumArr.map((el) => sortedScore.indexOf(el) + 1);
}

/**
 * 풀이
 * sumArr.push(Math.floor(sum/2));을 해줬을 땐 두개의 케이스가 실패한다..
 * 평균이라 2로 나눠준 것인데.. 다시 해보니까 Math.floor을 안붙여야 케이스가 통과됨!..
 * 근데 굳이 2로 안나누고 합으로만 순위를 매겨도 되므로 추가할 필욘 없는것 같다.
 */
