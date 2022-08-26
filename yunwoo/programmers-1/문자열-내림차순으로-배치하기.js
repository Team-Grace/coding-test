function solution(s) {
  const result = s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
    })
    .join("");

  return result;
}
