function solution(d, budget) {
  let result = 0;
  let sum = 0;

  d = d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) {
      result++;
    } else {
      break;
    }
  }
  return result;
}

/*
풀이

for문을 통해서 sum += d[i] 까지는 풀었는데.. 최대 몇개의 부서에 지원해야하는지? 에 대한
답은 풀 수 없었다. 구글링해서 풀이만 봤는데 오름차순을 먼저 시켰어야했다..!
오름차순을 시키는 이유는 적은 금액부터 지원해주면 최대한 많은 부서의 물품을 구매할 수 있으므로

1. 오름차순 정렬 시켜서 for 문을 통해 차례로 더해준다
2. 합친 금액을 변수 sum 에 넣고 if문을 통해 예산보다 같거나 적을때는 result값(최대 지원해주는 부서의 수)
을 1개씩 더해줘 반환한다.
3. 금액이 예산을 넘어가면 break를 통해 멈춰준다!

* 오름차순을 시킬 생각을 아예 못했던 것을 반성해야겠다...

*/
