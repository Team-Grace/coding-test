function solution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) result++;
      }
    }
  }
  return result;
}

function isPrime(sum) {
  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) return false;
  }
  return sum;
}

/**
 * 풀이
 * 세 개의 다른 수를 더한 값이 소수인지 찾아야 하는 문제이다.
 * 세 개의 수를 더하기 위해 3중 for문을 사용하고 변수를 선언할 때는 중복되지 않도록
 * +1씩 더해 변수의 수가 겹치지 않게 해준다.
 *
 * 그리고 소수를 판별하는 함수를 만들어야 한다.
 * 소수를 판별하기 위해서 소수에 대해 알아야한다.
 * 소수는 1이상이며, 1과 자신으로만 나눠지는 수이므로
 * 2부터 시작해서 sum값보다 작은 값 까지 반복해준다.
 * 만약 sum % i 를 했을때 0 이면 false를 리턴해 넘어가게 해준다.
 */
