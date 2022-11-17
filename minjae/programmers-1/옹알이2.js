function solution(babbling) {
  const singleRegex = /(aya|ye|woo|ma)/g;
  const doubleRegex = /(ayaaya|yeye|woowoo|mama)/g;

  return babbling.reduce((acc, cur) => {
    const replacedDoubleBabbling = cur.replace(doubleRegex, "X");

    if (!replacedDoubleBabbling.includes("X")) {
      const replacedSingleBabbling = cur.replace(singleRegex, "");

      if (!replacedSingleBabbling) {
        return acc + 1;
      }
    }
    return acc;
  }, 0);
}
