function solution(num) {
  let result = 0;

  while (result <= 500) {
    if (num === 1) break;
    else if (num % 2 === 0) {
      result++;
      num = num / 2;
    } else if (num % 2 === 1) {
      result++;
      num = num * 3 + 1;
    }

    if (result === 500) {
      result = -1;
      break;
    }
  }

  return result;
}
