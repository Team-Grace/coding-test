function solution(A, B) {
  let extrudedStr = A;

  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    const lastChar = extrudedStr.slice(-1);
    const slicedStr = extrudedStr.slice(0, -1);

    extrudedStr = lastChar + slicedStr;

    if (extrudedStr === B) return i + 1;
  }

  return -1;
}

function solution(A, B) {
  return (B + B).indexOf(A);
}
