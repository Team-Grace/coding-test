function solution1(chicken) {
  let rest = 0;
  let result = 0;

  while (chicken > 1) {
    rest += chicken % 10;
    result += Math.floor(chicken / 10);
    chicken = chicken / 10;
  }
  result += Math.floor(rest / 10);

  return result;
}
