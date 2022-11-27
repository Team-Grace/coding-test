function solution(lottos, win_nums) {
  const answer = [];
  let zeroCount = 0;
  let matchCount = 0;

  for (let num of lottos) {
    if (num === 0) {
      zeroCount++;
    }
    if (win_nums.includes(num)) {
      matchCount++;
    }
  }

  const maxRank =
    zeroCount === 0 && matchCount === 0 ? 6 : 7 - (zeroCount + matchCount);

  const minRank = matchCount === 0 ? 6 : 7 - matchCount;

  answer.push(maxRank, minRank);

  return answer;
}

/**
 * 풀이
 * 순위는 6 - 맞은개수 + 1 이므로 결국 7 - 맞은개수 이다.
 * 최대 순위는 0 개수가 모두 당첨일 때이므로 matchCount + zeroCount이고
 * 최저 순위는 0 개수가 모두 당첨이 아닐때이므로 7 - 맞은개수.
 * matchCount 또는 zeroCount가 0일때 즉, 당첨이 하나도 안되거나 0의 개수가 없을때는
 * 7 - 맞은개수가 7이므로 삼항연산자 통해 6으로 넣어준다.
 */
