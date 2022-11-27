function getBinaryMap(arr, n) {
  return arr.map((el) => el.toString(2).padStart(n, "0").split(""));
}

function solution(n, arr1, arr2) {
  const map1 = getBinaryMap(arr1, n);
  const map2 = getBinaryMap(arr2, n);

  return map1.map((row, i) => {
    return row.reduce((acc, cur, j) => {
      if (cur === "1" || map2[i][j] === "1") {
        return acc + "#";
      }
      return acc + " ";
    }, "");
  });
}
