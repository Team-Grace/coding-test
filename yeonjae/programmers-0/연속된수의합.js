function solution(num, total) {
  const answer = [];
  const center = Math.floor(total / num);
  const startVal = center - Math.floor((num - 1) / 2);

  for (let i = 0; i < num; i++) {
    answer[i] = startVal + i;
  }

  return answer;
}
