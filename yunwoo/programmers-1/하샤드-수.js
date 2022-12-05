function solution(x) {
  const result = Array.from(String(x)).reduce((acc, cur) => {
    return Number(cur) + acc;
  }, 0);
  return x % result === 0 ? true : false;
}
