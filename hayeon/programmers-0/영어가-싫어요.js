function solution(numbers) {
  let numStr = [
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

  numStr.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return Number(numbers);
}

/**
 * 풀이
 * 각 배열의 인덱스 숫자로 대체해주고 숫자형으로 변환시켜 리턴한다!
 */
