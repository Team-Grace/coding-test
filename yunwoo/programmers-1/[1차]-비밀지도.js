function solution(n, arr1, arr2) {
  const decodingArray = arr1.map((item) => {
    const decoding = item
      .toString(2)
      .padStart(n, "0")
      .replace(/1/g, "#")
      .split("");

    return decoding;
  });

  arr2.forEach((item, idx) => {
    const itemSplit = item.toString(2).padStart(n, "0").split("");

    itemSplit.forEach((el, i) => {
      if (el === "1" && decodingArray[idx][i] === "0") {
        decodingArray[idx][i] = "#";
      } else if (el === "0" && decodingArray[idx][i] === "0") {
        decodingArray[idx][i] = " ";
      }
    });
  });

  return decodingArray.map((item) => item.join(""));
}

/*
(풀이)
두개의 배열 중 1개를 먼저 '1'요소를 replace로 '#' 으로 변경한 새 배열을 만들고
남은 배열을 순회를 도는데 이때 문자열을 split으로 나눠 배열을 만든 후 그 문자열을 순회를 돌며
조건에 따라 '#' 혹은 ' ' 을 넣어준다.
*/
