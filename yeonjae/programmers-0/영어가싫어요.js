function solution(numbers) {
  const strNumberArr = [
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

  for (let i = 0; i < strNumberArr.length; i++) {
    numbers = numbers.split(strNumberArr[i]).join(i);
  }

  return Number(numbers);
}
