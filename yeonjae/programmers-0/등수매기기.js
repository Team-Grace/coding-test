function solution(score) {
  const scoreEverage = score.map((num) => (num[0] + num[1]) / 2);
  const sortEverage = scoreEverage.sort((a, b) => b - a);

  return score.map((item) => sortEverage.indexOf((item[0] + item[1]) / 2) + 1);
}
