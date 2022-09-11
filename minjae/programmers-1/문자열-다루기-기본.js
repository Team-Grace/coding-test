function solution1(s) {
  const convertedToNumber = Number(s);

  if (s.length === 4 || s.length === 6) {
    if (convertedToNumber === parseInt(s)) return true;
  }
  return false;
}

function solution2(s) {
  const upperStr = s.toUpperCase();

  if (s.length !== 4 && s.length !== 6) return false;

  for (const el of upperStr) {
    const asciiCode = el.charCodeAt();

    if (asciiCode >= 65 && asciiCode <= 90) {
      return false;
    }
  }

  return true;
}

/**
 * (풀이)
 * 문제 자체는 단순하다 숫자로만 구성된 문자열인 경우에만 true를 반환하면된다.
 * 첫 번째 solution은 parseInt와 Number의 형변환 차이를 이용해서 결과값을 도출하였으며,
 * 두 번째 solution은 ascii코드 변환을 통해 결과값을 도출하였다.
 */
