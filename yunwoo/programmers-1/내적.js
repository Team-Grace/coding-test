function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

/* 
(풀이)
reduce를 이용해 a,b 의 곱을 누적값에 넣어줘서 풀이.
*/
