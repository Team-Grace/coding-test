function solution(n) {
  return n
    .toString()
    .split("")
    .map((v) => Number(v))
    .reverse();
}
