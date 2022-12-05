function solution(ingredient) {
  let result = 0;
  const temp = [];
  const hamburger = "1231";

  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);

    const checkLastFouringredient = temp.slice(-4).join("");

    if (checkLastFouringredient === hamburger) {
      result++;
      temp.splice(-4, 4);
    }
  }

  return result;
}

/*
(풀이)
햄버거 재료의 순서를 담은 문자열을 만들고 주어진 재료를 temp에 하나씩 푸시해가며
마지막 4개의 재료가 햄버거 재료와 같아지면 result++ 해주고 마지막 4개 요소를 splice해서 제거
*/
