function solution(lines) {
  let Counter = {};
  let answer = 0;

  for (const line of lines) {
    const [x, y] = line;
    x < y ? checkRange(x, y) : checkRange(y, x);
  }
  return answer;

  function checkRange(start, end) {
    for (let i = start; i < end; i++) {
      Counter[i] = (Counter[i] || 0) + 1;

      if (Counter[i] === 2) answer++;
    }
  }
}
