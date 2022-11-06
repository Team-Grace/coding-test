function solution(lines) {
  const visitedObj = {};
  let result = 0;

  lines.forEach(([x, y]) => {
    const [min, max] = x < y ? [x, y] : [y, x];

    for (let i = min; i < max; i++) {
      visitedObj[i] = (visitedObj[i] || 0) + 1;

      if (visitedObj[i] === 2) result++;
    }
  });

  return result;
}
