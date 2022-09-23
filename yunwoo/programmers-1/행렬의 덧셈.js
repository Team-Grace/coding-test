function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((value, idx) => value + arr2[i][idx]));
}
/* 
(풀이)
예전에 혼자 풀어봤던 문제다.
map 메서드를 2중으로 사용해 2중 for문과 같은 용도로 사용하는데 첫번째 map에서 1차원 배열의 v값에서
한번 더 map을 주면 2차원 배열로 들어가게된다. 그렇게 주어진 배열의 요소 value와 arr2의 2차원배열을
주어진 index값으로 맞춰 주면 끝.
*/
