// 풀이1
function solution(arr) {
  const minNum = Math.min(...arr);
  const minIdx = arr.findIndex((num) => num === minNum);

  if (arr.length === 1) return [-1];
  arr.splice(minIdx, 1);

  return arr;
}

// 풀이2
function solution(arr) {
  const minNum = Math.min(...arr);
  const result = arr.filter((el) => el !== minNum);

  return result.length === 0 ? [-1] : result;
}

/**
 * (풀이)
 * Math.min하고 findIndex를 이용해 배열에서 최소값을 구하고, 그에 해당하는 인덱스를 찾아냈다.
 * 그런데 만약 arr.length === 1 이면 어차피 최소값을 추출해내면 빈 배열이라 바로 return을 했고,
 * 아닌 경우에은 splice를 통해서 arr에서 가장 작은 요소를 제거하고 arr를 리턴한다.
 *
 * 두 번째 풀이가 filter 1회만으로 결과를 도출할 수 있기에 훨씬 깔끔한 풀이이다.
 */
