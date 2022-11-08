function solution(A, B) {
  const wordArr = A.split("");
  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    if (wordArr.join("") === B) {
      return answer;
    }
    wordArr.unshift(wordArr.pop());
    answer++;
  }
  return -1;
}
