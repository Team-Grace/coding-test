function solution(d, budget) {
  const departmentBudget = [];

  departmentBudget = d.sort((a, b) => {
    return a - b;
  });

  let answer = 0;
  let budgetSum = 0;

  for (let i = 0; i < departmentBudget.length; i++) {
    budgetSum += departmentBudget[i];

    if (budgetSum <= budget) answer++;
    else break;
  }

  return answer;
}

/*
(풀이)
주어진 배열 d의 요소 합을 하나씩 더해주면서 예산보다 작으면 answer ++해주어서
최대 몇개의 부서에게 나누어줄수있는지 계산했더니
통과하지 못한 테스트가 몇개 생겼다.

먼저 작은수부터 큰순으로 정렬을 해주어야 앞에서부터 더하면서
나누어줄수있는 최대값을 구할수있다고 생각이들었다.
(처음 주어진 배열d의 요소의 순서는 랜덤이다.)

그래서 먼저 배열d를 정렬해준후에 for문을돌리면서
배열의요소를 앞에서부터 하나씩 더해주면서 예산의 값과 비교해,
나누어줄 수 있는 부서의 최댓값을 구해주었다.
*/
