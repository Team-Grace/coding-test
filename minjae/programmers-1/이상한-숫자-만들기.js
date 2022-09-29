function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el))
        .join("");
    })
    .join(" ");
}

/**
 * (풀이)
 * 문자열을 우선 소문자든 대문자든 통일 시킨다. 해당 풀이는 소문자로 통일
 * 그리고 띄어쓰기 기준으로 split을 이용해 배열로 변환한다. 그리고 map을 통해 각 단어들을 순회하고, 이 단어를 다시 split과 map을 이용해서 인덱스에 맞게 대문자로 변환한다. 이를 join으로 문자열로 변환 채로 리턴한다.
 * 결국 1번째 map도 배열을 반환받기 때문에 마지막 join으로 문자열로 변환시켜준다.
 */
