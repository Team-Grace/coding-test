function solution(nums) {
  const arr = new Set(nums);
  const limitNum = Math.floor(nums.length / 2);

  if (limitNum > arr.size) {
    return arr.size;
  } else {
    return limitNum;
  }
}
