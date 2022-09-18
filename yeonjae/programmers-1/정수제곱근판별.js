function solution(n) {
  const squareRoot = Math.sqrt(n);

  return Number.isInteger(squareRoot) ? (squareRoot + 1) ** 2 : -1;
}

/*
(풀이)
먼저 양의 정수 x의 제곱인지 알기위해 Math.sqrt를 사용했고
Number.isInteger를 통해 정수인지 아닌지 판별이 가능하다해서 활용을 해보았다. 

따라서 그 값이 정수면 n+1의 제곱을 리턴하고, 정수가 아니면 -1을 리턴하도록 했다 
*/
