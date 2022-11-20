function solution(k, m, score) {
  const sortedScore = [...score].sort((a, b) => b - a); // 오름차순 정렬
  const boxs = [];

  for (let i = 0; i < sortedScore.length; i += m) {
    const slicedBox = sortedScore.slice(i, m + i);

    if (slicedBox.length === m) {
      const minPoint = Math.min(...slicedBox);

      boxs.push({ min: minPoint, length: slicedBox.length });
    }
  }

  return boxs.reduce((acc, cur) => (acc += cur.min * cur.length), 0);
}
