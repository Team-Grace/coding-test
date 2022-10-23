function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [numA, numB] = [Math.abs(a - n), Math.abs(b - n)];

    if (numA === numB) return b - a;

    return numA - numB;
  });
}

/*
(풀이)
주어진 배열을 sort()로 정렬 해주는데 절대값인 Math.abs를 이용해 n과의
값 차이를 동일하게 맞춰주고 값이 같을 때는 큰값이 오도록 b-a
그 외에는 오름차순으로 정렬 해준다.
*/
