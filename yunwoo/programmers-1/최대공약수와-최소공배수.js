function solution(n, m) {
  return [maxAcommonDivisor(n, m), (n * m) / maxAcommonDivisor(n, m)];
}

function maxAcommonDivisor(a, b) {
  let remainder = 0;

  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

/* 
(풀이)
최대공약수를 구하는 함수를 만들어준다. 함수는
나머지 값을 넣어주는 변수하나를 생성해주고 while 문으로 b가 0이 되면 탈출하게 되는데 이유는

(a가 작을경우)
remainder = a 가 그대로 들어감
a = b a보다 큰값인 b가 들어감
b = remainder 나머지값이 아닌 a가 b에 할당되고 결국 a=b b=a 가 되어 다음
반복부터는 큰값에서 작은값을 나눈 나머지값을 b에 할당하게 된다 이렇게 반복문을 돌다보면
나머지값을 할당받는 b는 맞아떨어질 경우 0 이 되고 그때 나머지를 0 으로 만드는 작은값 b를
할당 받은 a를 리턴해서 받아오면 그값이 최대공약수이다.
최소공배수는 2개의 피연산자 값을 곱한값에 최대공약수를 나눠주면 나온다.

이해는 했는데 알고리즘과 연관하여 풀어가는건 어렵다...

*/
