function solution(score) {
  const sumScores = score.map((el) => el[0] + el[1]).sort((a, b) => b - a);
  return score.map((el) => sumScores.indexOf(el[0] + el[1]) + 1);
}
