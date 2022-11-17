function solution(k, m, score) {
  const newScore = score.sort((a, b) => a - b);
  let applePrice = 0;

  while (newScore.length >= m) {
    const temp = [];

    for (let i = 0; i < m; i++) {
      temp.push(newScore.pop());
    }
    applePrice += Math.min(...temp) * m;
  }
  return applePrice;
}
