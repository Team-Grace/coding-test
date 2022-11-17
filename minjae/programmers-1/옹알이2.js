function solution(babbling) {
  const singleRegex = /(aya|ye|woo|ma)/g;
  const doubleRegex = /(ayaaya|yeye|woowoo|mama)/g;

  return babbling.reduce((acc, cur) => {
    const replacedDoubleBabbling = cur.replace(doubleRegex, "X");
    const replacedSingleBabbling = replacedDoubleBabbling.replace(
      singleRegex,
      ""
    );

    return replacedSingleBabbling ? acc : acc + 1;
  }, 0);
}
