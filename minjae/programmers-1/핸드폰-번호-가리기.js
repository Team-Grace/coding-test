function solution(phone_number) {
  return phone_number.split("").reduce((acc, cur, idx) => {
    return idx < phone_number.length - 4 ? (acc += "*") : (acc += cur);
  }, "");
}

function solution(phone_number) {
  let result = "";

  for (const idx in phone_number) {
    if (idx < phone_number.length - 4) {
      result += "*";
    } else {
      result += phone_number[idx];
    }
  }

  return result;
}

/**
 * (풀이)
 * phone_number를 배열로 변환 후에 reduce를 이용해서 순회하는데,
 * 이때, idx가 phone_number의 길이 - 4 보다 작으면 acc에 *을 누적한다.
 * 만약 크다면 이때는 뒷 4자리라는 소리기 때문에 원래 숫자를 acc에 누적한다.
 * reduce의 초깃값이 문자열이기 때문에 곧바로 return하면 된다.
 */
