function solution(A, B) {
  let extrudedStr = A;

  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    extrudedStr = extrudedStr.slice(-1) + extrudedStr.slice(0, A.length - 1);

    if (extrudedStr === B) return i + 1;
  }

  return -1;
}

function solution(A, B) {
  return (B + B).indexOf(A);
}
