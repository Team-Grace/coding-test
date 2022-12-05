function solution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(sum)) result++;
      }
    }
  }
  return result;
}

function isPrimeNumber(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * (풀이)
 * 완전 탐색 문제이다 3중 for문을 써서 모든 경우의 수를 구하고,
 * 이때 sum이 소수인지 판별해 result의 값을 증가시켜줬다.
 * 소수 인지 판별 때는 반복 횟수를 줄이기 위해 Math.sqrt()를 이용하는게 좋다.
 */
