function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let binary = (arr1[i] | arr2[i]).toString(2);
    //arr1[i]또는 arr2[i]중 하나라도 1이면 1

    binary =
      binary.length < n ? "0".repeat(n - binary.length) + binary : binary;
    //이진수가 n보다 작을경우에는 0으로 채움

    binary = binary.replace(/1/g, "#").replace(/0/g, " ");
    //0과 1로 이루어져있는데 1이면 # , 0이면 ""를 answer에 넣는다
    answer.push(binary);
  }

  return answer;
}
