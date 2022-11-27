function solution(s) {
  //미리 바꿔줄 문자열을 배열에 정의 (문자열을 숫자로 바꿔주기위해 인덱스에 맞게 배치됨)
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
  //s를 변수 result에 할당 해준다

  //아까 만들어둔 전체배열 0 ~ 9까지 돌면서 array[i] = "zero"부터 "nine"까지 하나씩 기준을 잡아서 문자열을 배열로 바꿔준다.
  for (let i = 0; i < numArr.length; i++) {
    const array = result.split(numArr[i]); //문자열 => 배열을 생성
    result = array.join(i);
    // 문자열과 숫자가 섞인 result를 반복문을 통해 바꿔준다. 결과적으로 문자열은 인덱스번호에 따라 있으면 숫자로 변환되기때문에 "1478"이런식으로 변환이되고 이 문자열을 Number을통해 숫자로 return해준다.
  }
  return Number(result);
}
