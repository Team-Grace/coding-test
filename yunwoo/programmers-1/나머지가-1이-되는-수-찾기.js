function solution(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
}

/*
(풀이)
n의 제한사항은 3~1,000,000이므로 i를 2부터 시작해서
for문을 돌리고 나머지가 1이되는경우가 나오면 바로 i를 return 하고 반복문을 종료한다.
나머지가 1이 되는 자연수 x 를 다른 방법으로 할수는 없을까 고민해 봤는데 찾지 못했다🤔
*/
