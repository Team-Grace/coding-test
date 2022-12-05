function solution(arr) {
  return arr.length <= 1 ? [-1] : arr.filter((v) => v !== Math.min(...arr));
}

/* 
(풀이)
삼항연산자로 배열의 길이가 1이하면 [-1]을 리턴하고 아니면
filter 메서드로 min값과 같지 않은 값의 배열만 모아 반환한다.
*/
