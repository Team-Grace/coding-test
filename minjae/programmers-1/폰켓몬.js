function solution(nums) {
  const halfLength = Math.floor(nums.length / 2);
  const setNums = new Set(nums);

  return setNums.size > halfLength ? halfLength : setNums.size;
}
