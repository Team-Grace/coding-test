function solution(s, n) {
  let answer = "";

  answer = s
    .split("")
    .map((item) => {
      if (item === " ") {
        return " ";
      }
      const charCode = item.charCodeAt();
      return item.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(charCode + n - 26)
        : String.fromCharCode(charCode + n);
    })
    .join("");

  return answer;
}
