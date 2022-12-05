function solution(babbling) {
  let result = 0;

  babbling.forEach((el) => {
    const reg = /aya|ye|woo|ma/g;
    const babblingReplace = el.replace(reg, "1");

    if (
      babblingReplace === "1" ||
      babblingReplace === "11" ||
      babblingReplace === "111" ||
      babblingReplace === "1111"
    ) {
      result++;
    }
  });

  return result;
}

/*
(풀이)
정규표현식의 | 를 이용해서 해당 하는 요소를 1로 바꾸어 조건문으로 확인해
해당할 경우 result++을 해준다. 각각의 요소는 최대 1번씩만 등장하므로
조건문은 1이 4개일 경우만 고려하면 된다.
*/
