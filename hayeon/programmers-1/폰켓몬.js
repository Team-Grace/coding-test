function solution(nums) {
  const onlyPhoneketmon = [...new Set(nums)];

  const choice = nums.length / 2;

  return onlyPhoneketmon.length < choice ? onlyPhoneketmon.length : choice;
}

/**
 * 풀이
 * 문제가 길어서 어렵다고 생각이 들었는데 결국에 중복을 제거했을 때 남은 갯수..?를
 * 따져보면 됐던 문제 같다.
 * 중복 숫자를 제거한 배열을 가지고 N/2 (원래배열의 절반) 와 비교하면 된다!
 * 처음엔 헷갈려서 종이에 하나하나 적어보니까 이해가 됐다!
 */
