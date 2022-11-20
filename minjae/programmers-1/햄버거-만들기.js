function solution(ingredient) {
  const stack = [];

  return ingredient.reduce((acc, cur) => {
    stack.push(cur);

    if (isHamburger(stack)) {
      stack.splice(-4);
      return acc + 1;
    }
    return acc;
  }, 0);
}

function isHamburger(stack) {
  const stackLength = stack.length;
  const hamburger = stack.slice(stackLength - 4, stackLength).join("");

  return hamburger === "1231";
}
