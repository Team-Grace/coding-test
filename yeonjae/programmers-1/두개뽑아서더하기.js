function solution(numbers) {
  const results = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      results.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(results)];

  return answer.sort((a, b) => a - b);
}

/*
(풀이)
처음에 이중for문을 통해 배열에 있는 요소의합을 모두더해서 results라는 배열에 넣어주고나서
Set함수를 통해 배열의 중복값을 제거해준 후,
마지막에 오름차순한 answer를 리턴해주었다.

Set함수를 한번 알고나니 이런 중복요소가보이면 이제 바로 생각이난다 :)  
*/