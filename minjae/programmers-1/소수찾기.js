function solution(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (checkDecimals(i)) {
      result++;
    }
  }
  return result;
}

function checkDecimals(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
