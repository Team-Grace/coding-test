function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = s;

  for (const num in numbers) {
    const pattern = `${num}`;
    const reg = new RegExp(pattern, "g");
    const replaceString = result.replace(reg, numbers[num]);

    result = replaceString;
  }

  return Number(result);
}

/*
(풀이)
정규표현식을 이용해 zero 부터 nine까지 넣어둔 객체를 반복문 돌며
키값을 이용해 해당하는 문자를 숫자로 변경해줬다.
*/
