function solution(numlist, n) {
  const newArr = numlist.map((num) => [Math.abs(num - n), num]);

  return newArr
    .sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
    })
    .map((num) => num[1]);
}
