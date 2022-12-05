function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b).reduce((acc, cur) => {
    if (budget >= acc + cur) {
      result++;
    }
    return acc + cur;
  }, 0);
  return result;
}

function solution(d, budget) {
  let result = 0;
  let sumEach = 0;
  d.sort((a, b) => a - b);
  for (i = 0; i < d.length; i++) {
    sumEach += d[i];
    if (budget >= sumEach) {
      result++;
    }
  }
  return result;
}
/*

(풀이)
1. 배열을 오름차순으로 정렬을 해주고 reduce메소드를 누적값에 현재값을 더하는 도중 if문으로 budget 보다
누적값 + 현재값 이 작을경우 result 를 1개씩 카운트 해줬다.

2. result 와 각 합산값의 변수 sumEach를 만들어주고 (변수이름이 적절치 않은거 같은데.. 떠오르는 이름이 없습니다ㅠㅠ)
배열 오름차순 정렬 후 for문으로 작은값부터 sumEach에 값을 대입해주고 budget보다 적을 경우에만 result++; 해준다.

그리디 알고리즘이 뭘 하고자 하는지는 알겠는데.. 코드로 대입하려하면 이해가안간다.. @_@

*/
