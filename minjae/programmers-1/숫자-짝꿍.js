function solution(X, Y) {
  const commons = [];
  const obj = {};

  for (const el of X) {
    obj[el] = (obj[el] || 0) + 1;
  }

  for (const el of Y) {
    if (obj[el]) {
      commons.push(el);
      obj[el]--;
    }
  }

  commons.sort((a, b) => b - a);

  if (!commons.length) return "-1";
  else if (commons[0] === "0") return "0";
  return commons.join("");
}
