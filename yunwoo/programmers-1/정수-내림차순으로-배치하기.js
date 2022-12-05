function solution(n) {
  const result = (n + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(result);
}
