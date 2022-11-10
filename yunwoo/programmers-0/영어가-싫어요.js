function solution(numbers) {
  const arr = [
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
  let copyNumbers = numbers;

  for (let i = 0; i < arr.length; i++) {
    copyNumbers = copyNumbers.replaceAll(arr[i], i);
  }

  return +copyNumbers;
}

/*
(풀이)
one 부터 nine 까지 나열한 배열을 만들고
인자로 받아온 문자열을 for문을 돌며 전부 변경하여 재할당 해준다.
*/
