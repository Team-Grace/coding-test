function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => (signs[idx] ? acc + cur : acc - cur),
    0
  );
}
