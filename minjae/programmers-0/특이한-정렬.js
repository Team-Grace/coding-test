function solution(numlist, n) {
  const gapItemArr = numlist.map((el) => [Math.abs(n - el), el]);
  const sortedGapItemArr = gapItemArr.sort(
    (a, b) => a[0] - b[0] || b[1] - a[1]
  );

  return sortedGapItemArr.map((el) => el[1]);
}
