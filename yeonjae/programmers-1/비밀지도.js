function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let binary = (arr1[i] | arr2[i]).toString(2);

    binary =
      binary.length < n ? "0".repeat(n - binary.length) + binary : binary;

    binary = binary.replace(/1/g, "#").replace(/0/g, " ");
    answer.push(binary);
  }

  return answer;
}
