function solution(left, right) {
  let answer = 0;

  for (let num = left; num <= right; num++) {
    const divisorArr = [];

    for (let divisor = 1; divisor <= num; divisor++) {
      if (num % divisor === 0) {
        divisorArr.push(divisor);
      }
    }

    const divisorNum = divisorArr.length;

    if (divisorNum % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
  }
  return answer;
}
