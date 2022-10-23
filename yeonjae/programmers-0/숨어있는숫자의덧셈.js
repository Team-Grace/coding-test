function solution(my_string) {
  const answer = my_string
    .split("")
    .map(Number)
    .join("")
    .split("NaN")
    .map(Number)
    .filter((item) => item != 0);
  return answer.length === 0 ? 0 : answer.reduce((prev, cur) => prev + cur);
}
