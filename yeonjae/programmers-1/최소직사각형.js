function solution(sizes) {
  const answer = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      answer.push(sizes[i].reverse());
    } else {
      answer.push(sizes[i]);
    }
  }

  const width = [];
  const height = [];

  for (let i = 0; i < answer.length; i++) {
    width.push(answer[i][0]);
    height.push(answer[i][1]);
  }
  const sortWidth = width.sort((a, b) => b - a);
  const sortHeight = height.sort((a, b) => b - a);

  return sortWidth[0] * sortHeight[0];
}
