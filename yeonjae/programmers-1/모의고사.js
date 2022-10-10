function solution(answers) {
  const result = [];
  const counts = [0, 0, 0];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];

    patterns.forEach((pattern, idx) => {
      if (pattern[i % pattern.length] === answer) {
        counts[idx]++;
      }
    });
  }

  const maxCount = Math.max(...counts);

  counts.forEach((count, i) => {
    if (count === maxCount) result.push(i + 1);
  });

  return result;
}
