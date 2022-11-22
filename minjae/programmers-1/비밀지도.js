function getBinaryMap(arr, n) {
  return arr.map((el) => {
    const binary = el.toString(2);
    const blank = "0".repeat(n - binary.length);

    return blank + binary;
  });
}

function solution(n, arr1, arr2) {
  const map1 = getBinaryMap(arr1, n);
  const map2 = getBinaryMap(arr2, n);

  return map1.map((row, i) => {
    return row.split("").reduce((acc, cur, j) => {
      if (cur === "1" || map2[i][j] === "1") {
        return acc + "#";
      }
      return acc + " ";
    }, "");
  });
}
