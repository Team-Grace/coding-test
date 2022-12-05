function solution(sides) {
  const min = Math.min(...sides);
  const max = Math.max(...sides);
  let result = 0;

  for (let i = max - min + 1; i <= max; i++) {
    result++;
  }

  for (let i = max + 1; i < max + min; i++) {
    result++;
  }

  return result;
}
