function solution(s) {
  const result = [];
  const arr = s.split(" ");

  for (let el of arr) {
    let temp = "";

    for (let i = 0; i < el.length; i++) {
      if (i % 2 === 0) {
        temp += el[i].toUpperCase();
      } else {
        temp += el[i].toLowerCase();
      }
    }
    result.push(temp);
  }

  return result.join(" ");
}
