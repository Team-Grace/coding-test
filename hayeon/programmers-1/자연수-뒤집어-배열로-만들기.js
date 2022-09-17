function solution(n) {
  const str = n.toString();
  //const mapNum = (arg) => Number(arg);
  const newArr = str.split("").map((arg) => parseInt(arg));

  return newArr.reverse();
}

/**
 * 처음에는 숫자로 바꿀 생각을 안하고 문자열로만 뒤집혀 나와서
 * 배열 안의 문자열을 모두 숫자로 변경해야 한다고 생각함
 * 그래서 먼저 n을 문자열로 변경하고, 자른후 모든 요소에
 * map함수를 이용해 숫자로 바꿔준다!
 * 그리고 뒤집어 리턴해주면 끝.
 */
