function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const winCount = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeroCount = lottos.filter((lotto) => !lotto).length;
  const bestCount = winCount + zeroCount;

  return [rank[bestCount], rank[winCount]];
}
