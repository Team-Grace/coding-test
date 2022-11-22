function solution(babbling) {
  const dupWord = ["11", "22", "33", "44"];
  let count = 0;

  const babblingNum = babbling.map((unit) =>
    unit
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4")
  );

  for (let i = 0; i < babblingNum.length; i++) {
    if (dupWord.some((word) => babblingNum[i].includes(word))) continue;
    if (isNaN(babblingNum[i])) continue;
    count++;
  }

  return count;
}
