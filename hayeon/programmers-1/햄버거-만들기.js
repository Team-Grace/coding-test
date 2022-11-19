function solution(ingredient) {
  let result = 0;
  const burgerOder = [1, 2, 3, 1];
  const stack = [];

  ingredient.map((i) => {
    stack.push(i);

    if (stack.slice(-4).join("") == burgerOder.join("")) {
      for (let i = 0; i < 4; i++) stack.pop();
    }
  });

  result = (ingredient.length - stack.length) / 4;

  return result;
}

/**
 * 풀이
 * 버거를 빵-야채-고기-빵 순서대로 배열에 넣어준다.
 * stack에 재료 순서를 넣어주고 burgerOrder과 같은 형태가 되면 stack 배열에서 제거해준다.
 * 제거되고 남은 배열의 길이를 재료 길이만큼 빼고 4로 나눠준 값을 결과값에 넣는다. (4개씩 묶음)
 */
