function solution(s, n) {
  const result = s.split("").map((el) => {
    const ascii = el.charCodeAt();

    if (el === " ") return " ";
    return getAsciiToString(ascii, n);
  });

  return result.join("");
}

// 대문자인지 소문자인지 판별
function getIsUpperCase(ascii) {
  if (ascii >= 65 && ascii < 91) return true;
  return false;
}

// ascii코드를 상황에 맞게 문자열로 변환
function getAsciiToString(ascii, n) {
  const nextAscii = ascii + n;

  if (getIsUpperCase(ascii)) {
    // 대문자
    if (nextAscii > 90) {
      return String.fromCharCode(nextAscii - 90 + 64);
    }
  } else {
    // 소문자
    if (nextAscii > 122) {
      return String.fromCharCode(nextAscii - 122 + 96);
    }
  }
  return String.fromCharCode(nextAscii);
}

/**
 * (풀이)
 * 문제는 단순하다 알파벳을 특정 숫자(n)만큼 밀어낸 값을 출력하면 되는데,
 * 대문자와 소문자를 구분지어서 접근해야된다. 나는 대문자와 소문자를 구분하기 위해 getIsUpperCase라는 함수를 만들었다.
 * 그리고 z에서 1만큼 밀어내면 a가 되야하는데 이런 오버플로우되는 상황과 일반적인 상황 각각의 상황에 맞게 값을 리턴하는 getAsciiToString 함수를 만들었다.
 * 또한, 해당 문제에서는 ascii 코드로 변환시켜주는 charCodeAt()과 아스키 코드를 문자열로 변환해주는 String.fromCharCode() 를 활용해서 결과를 도출했다.
 */
