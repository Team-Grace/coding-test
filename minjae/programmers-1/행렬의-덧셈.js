function solution(arr1, arr2) {
  return arr1.map((innerArr, i) => {
    return innerArr.map((el, j) => el + arr2[i][j]);
  });
}

/**
 * (풀이)
 * arr1을 요소들을 map을 통해 순회하면서 각 인덱스에 맞는 arr2요소를 더해서 리턴한다. 이때 map은 새로운 배열을 반환해주기 때문에 적절하게 결과를 도출해 낼 수 있다.
 */
