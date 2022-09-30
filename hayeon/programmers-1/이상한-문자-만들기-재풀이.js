function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((el, idx) => (idx % 2 === 0 ? el.toUpperCase() : el))
        .join("");
    })
    .join(" ");
}

/**
 * 풀이
 * 공백을 기준으로 단어를 잘라서 배열에 넣고, 그 단어를
 * 다시 잘라서 배열에 넣은후 짝수번째에 있는 문자를 대문자로 바꿔주고
 * 홀수번째일 때 그대로 써준다. 그것들을 다시 붙이고
 * 공백을 넣어 하나의 문자열로 붙여주면 된다!
 * 근데 처음에 toLowerCase()를 하지않으면 통과가 되지 않는다....
 */
