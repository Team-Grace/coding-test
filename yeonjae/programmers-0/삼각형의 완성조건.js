function solution(sides) {
  const maxLength = Math.max(...sides);
  const minLength = Math.min(...sides);
  const resultArr = [];

  for (let i = maxLength - minLength + 1; i <= maxLength; i++) {
    resultArr.push(i);
  }

  for (let j = maxLength + minLength - 1; j > maxLength; j--) {
    resultArr.push(j);
  }

  return resultArr.length;
}
