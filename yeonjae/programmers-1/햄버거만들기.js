function solution(ingredient) {
  const orderHamburgerIngredientArr = [];
  let hamburgerCnt = 0;

  ingredient.forEach((el) => {
    orderHamburgerIngredientArr.push(el);

    if (orderHamburgerIngredientArr.length >= 4) {
      const find = orderHamburgerIngredientArr.slice(-4).join("");

      if (find === "1231") {
        orderHamburgerIngredientArr.pop();
        orderHamburgerIngredientArr.pop();
        orderHamburgerIngredientArr.pop();
        orderHamburgerIngredientArr.pop();
        hamburgerCnt++;
      }
    }
  });

  return hamburgerCnt;
}
