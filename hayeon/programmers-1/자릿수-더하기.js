function solution(n) {
  let result = 0;

  n = n.toString();

  for (let i = 0; i < n.length; i++) {
    result += parseInt(n[i]);
  }
  return result;
}

/*function solution(n) {
  const nArr = n.toString().split("");
  let sum = "";
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    sum += nArr[i];
    result = Number(sum);
  }
  return result;
}

위 풀이가 처음 푼 풀이인데.. 자꾸 답이 0이 나옴..
처음에 설정했던 nArr가 문제일까,,
굳이 배열로 받지않고 문자열에서 바로 str[i]를 통해 뽑아내는 것이 더 깔끔하고 쉬운 것 같다.
*/
