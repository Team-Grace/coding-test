function solution(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
}

/*
(풀이)
약수는 나누어떨어지는 수 이기때문에
for문을 통해 1부터 n까지 돌면서 n을 i로 나누어서 0이되는 숫자를 
arr라는 배열에 넣어주어서 reduce를 통해 합을 구해서 리턴해주었다.
*/
