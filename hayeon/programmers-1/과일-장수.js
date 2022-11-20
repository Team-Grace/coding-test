function solution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a);

  let result = 0;
  let lowestScore = m - 1;

  for (let i = 0; i < Math.floor(score.length / m); i++) {
    result += score[lowestScore] * m;

    lowestScore += m;
  }
  return result;
}

/**
 * 풀이
 * 처음에 문제를 잘못 이해해서 제대로 못풀었다.. 글을 잘 읽어야한다.
 * 최대 이익을 뽑기 위해서 내림차순으로 정렬한다.
 * m만큼 상자안에 들어가므로 내림차순했을 때 (m - 1)번 째에 있는 점수가 최저 점수(lowestScore)가 된다.
 *
 * 총 사과 개수(score.length)를 상자안에 들어갈 사과수를 나눠 최대 상자 개수를 구하고 그만큼 반복한다.
 * lowestScore 과 상자에 담긴 개수를 곱해 result에 누적한다.
 *
 * 그리고 다음 상자의 최저 점수인 사과를 구해야 하기때문에 lowestScore에 m을 더해준다.
 *
 * ex) [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
 *
 * sortScore = [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]
 * lowestScore = [4, 4, (4), 4, 4, (4), 2, 2, (2), 2, 1, (1)]
 */
