function solution(n) {
  let result = 0;

  while (n > 0) {
    const str = String(++result);

    if (result % 3 === 0 || str.includes("3")) continue;
    n--;
  }
  return result;
}
