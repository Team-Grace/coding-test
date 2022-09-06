function solution(s, n) {
  const result = [];

  for (let string of s) {
    let convertedString = string === " " ? " " : string.charCodeAt();
    const notblank = !(convertedString === " ");

    if (notblank && convertedString <= 90) {
      convertedString += n;
      if (convertedString > 90) {
        convertedString -= 26;
      }
    }

    if (notblank && convertedString >= 97) {
      convertedString += n;
      if (convertedString > 122) {
        convertedString -= 26;
      }
    }

    notblank
      ? result.push(String.fromCharCode(convertedString))
      : result.push(" ");
  }
  return result.join("");
}

/*
(풀이)
테스트 케이스에서 한번 막혔었는데 대문자 Z도 A로 넘어가야하는지 몰랐다.🥲
for of 문으로 문자열s를 넣고 변수 string을 아스키 코드로 변환. 공백일 경우는 공백유지
문자열이 공백인지 확인하는 코드는 반복되므로 변수에 넣어주고
if문으로 공백이 아니고 변환한 아스키코드 값이 90 이하일 경우와
공백이 아니고 97보다 큰 경우로 나누어 소문자와 대문자를 분리한 후
내부에서 아스키코드값이 z를 넘어가면 -26 으로 a부터 시작하게 해준다.
마지막으로 공백일 경우와 아닌경우를 나눠서 result 배열에 push해주고 join해서 제출.
*/
