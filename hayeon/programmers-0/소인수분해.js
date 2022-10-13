function solution(n) {
  const result = [];

  while (n % 2 === 0) {
    result.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      result.push(i);
      n = n / i;
    }
  }

  if (n > 2) result.push(n);

  return [...new Set(result)];
}

/**
 * 풀이
 * 너무 헷갈렸던 문제! 민재님의 도움으로 이해하고 풀 수 있었다.
 * 처음에는 i * i <= n 까지 이해를 했는데 if문을 안쓰니 테스트가 통과되지 않았다.
 * 근데 n = 17 이면 두번째 for문을 풀 때 i가 (i*i <= n이므로) i = 3 이면
 * 3*3 = 9
 * 5*5 = 25 이므로 i가 17까지 갈 수 없어 result배열에 17을 넣을 수 없다.
 * 따라서 if문을 이용해 넣어주도록 해야함!
 */
