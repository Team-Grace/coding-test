function solution(a, b) {
  let minValue;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      minValue = i;
    }
  }

  let denominatorMin = b / minValue;
  while (denominatorMin > 1) {
    let newDenominatorMin = denominatorMin;
    if (denominatorMin % 2 === 0) {
      denominatorMin /= 2;
    } else if (denominatorMin % 5 === 0) {
      denominatorMin /= 5;
    }
    if (newDenominatorMin === denominatorMin) {
      break;
    }
  }
  return denominatorMin === 1 ? 1 : 2;
}
