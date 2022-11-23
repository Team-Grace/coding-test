function solution(s) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = s;

  for (let i = 0; i < numArr.length; i++) {
    let array = result.split(numArr[i]);
    result = array.join(i);
  }
  return Number(result);
}
