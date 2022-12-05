function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let sCode = s.charCodeAt(i);

    if (sCode >= 65 && sCode <= 90) {
      sCode += n;

      if (sCode > 90) sCode -= 26;
    } else if (sCode >= 97 && sCode <= 122) {
      sCode += n;

      if (sCode > 122) sCode -= 26;
    }
    const sString = String.fromCharCode(sCode);
    result += sString;
  }
  return result;
}

/**
 * 풀이
 * 너무너무....헷갈리는 문제였다... 뭔가 억지로 짠 것  같은 느낌도 들고..
 * 일단 대문자 유니코드가 65~90 이고, 소문자 유니코드가 97~122 까지 인데
 * 만약 최대치를 넘어가면 다른 문자가 반환? 되기 때문에
 * -26을 한 이유는 z -> a 로 다시 돌아가야 하기 때문!..
 * 그리고 값을 다시 fromCharCode를 통해 문자로 바꿔주는 것!!
 * 소수찾기와 마찬가지로 나에게 어려웠던 문제라 다시 한 번 더 해봐야할 것 같다
 * 그리고 구글링해보니 다른 풀이도 여러개 있어서 같이 봐야할 것 같다!
 */
