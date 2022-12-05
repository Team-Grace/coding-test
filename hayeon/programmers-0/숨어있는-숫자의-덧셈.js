function solution(my_string) {
  const regexArr = my_string.replace(/[^0-9]/g, " ").split(" ");

  return regexArr.reduce((acc, cur) => (acc === "" ? acc : acc + +cur), 0);
}

/**
 * 풀이
 * 정규표현식을 통해서 문자를 제외하고 숫자만 있는 배열을 새로 만들고
 * 그 배열 안의 값이 ""이면 acc를 아니면 acc + (+cur)해 값을 리턴한다.
 */
