function solution(s) {
  const convertedArr = Array.from(s);
  const result = convertedArr.map((v) => Number(v));

  if (s.length === 4 || s.length === 6) {
    return result.includes(NaN) ? false : true;
  }
  return false;
}
