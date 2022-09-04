function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) answer++;
  }
  return answer;
}

/*
(풀이)
소수찾는 알고리즘, `에라토스테네스의 체`를 이용해서 소수를 찾아주는 함수isPrime을 만들었고,
소수인경우 숫자를 하나씩 올려줌으로써 소수의 개수를 찾았다.

소수찾는 알고리즘을 혼자 결국 구현하지못하고
이미 구현되어있는, 에라토스테네스의 체를사용해서 풀었다 :(

에라토스테네스의 체는,
전체 배열에서 2부터 n의 제곱근(루트n)까지의 소수의 배수들을 제외시키면 소수가 남는 방식이다 .
이해가 되는것같으면서도 헷갈린다,,
소수찾는 알고리즘은 한번 하나씩 나열하면서 다시한번 이해해봐야할것같다.
*/
