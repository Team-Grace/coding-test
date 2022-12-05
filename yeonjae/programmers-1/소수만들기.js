function solution(nums) {
  const numslength = nums.length;
  let answer = 0;

  for (let i = 0; i < numslength; i++) {
    for (let j = i + 1; j < numslength; j++) {
      for (let k = j + 1; k < numslength; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }

  function isPrime(sum) {
    if (sum < 2) return true;
    for (let i = 2; i < sum; i++) {
      if (sum % i == 0) return false;
    }
    return true;
  }

  return answer;
}
