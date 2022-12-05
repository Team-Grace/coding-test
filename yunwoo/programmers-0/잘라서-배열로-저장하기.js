function solution(my_str, n) {
  const result = [];
  const splitStrings = my_str.split("");

  for (let i = 1; i <= Math.ceil(my_str.length / n); i++) {
    const cutString = splitStrings.splice(0, n).join("");

    result.push(cutString);
  }

  return result;
}

/*
(풀이)
문자열을 모두 나눠 배열로 넣어준 뒤 문자열의 개수 / 나눌 숫자 만큼 순회를돌며
배열에 저장된 문자열을 잘라내 result 배열에 담아준 후 리턴.
 */
