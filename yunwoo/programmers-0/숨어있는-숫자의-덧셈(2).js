function solution(my_string) {
  const numbers = my_string.match(/\d+/g);

  return numbers ? numbers.reduce((acc, cur) => acc + parseInt(cur), 0) : 0;
}
