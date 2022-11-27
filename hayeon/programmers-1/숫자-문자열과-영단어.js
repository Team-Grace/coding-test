function solution(s) {
  const strings = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let result = s;

  for (let i = 0; i < strings.length; i++) {
    let changeNumber = result.split(strings[i]);

    result = changeNumber.join(i);
  }

  return parseInt(result);
}

/**
 * 풀이
 * 처음에 배열안에 문자열을 다 넣어 변수를 만들었다.
 * 그리고 spilt("")으로 쪼갠 것을 변수에 담자 생각하고 했는데
 * 그러면 모든 단어가 다 쪼개져서 실패한다.
 * 후에 생각했던 것은 s안의 문자로 쪼개면 어떨까? 생각해서 쪼갰다.
 * 처음에는 숫자를 담은 배열도 넣어 그걸로 붙여줘야겠다고 생각했는데 어처피 0~9이면
 * 인덱스 숫자와 같기 때문에 숫자배열은 삭제하고 인덱스로 붙이려고 생각했다.
 * 이중배열문으로 했다가 너무 복잡해져서 다른분의 코드를 참고했는데 result변수에 s를 담아놓고
 * i로 join 하면 됐었다.... 생각은 비슷하게했는데 코드로 쓰지못한... 변수에 s를 할당할 생각은 아예못했다.
 * 그래도 근접하게 접근한것 같아서 다른방식으로도 풀어봐야겠다.
 */
