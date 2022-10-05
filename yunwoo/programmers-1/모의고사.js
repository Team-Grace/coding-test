function solution(answer) {
  const result = [];

  const personOne = [1, 2, 3, 4, 5];
  const personTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const personThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answerOne = answer.filter((v, i) => v === personOne[i % 5]).length;
  const answerTwo = answer.filter((v, i) => v === personTwo[i % 8]).length;
  const answerThree = answer.filter((v, i) => v === personThree[i % 10]).length;

  const highScore = Math.max(answerOne, answerTwo, answerThree);

  if (highScore === answerOne) result.push(1);
  if (highScore === answerTwo) result.push(2);
  if (highScore === answerThree) result.push(3);

  return result;
}
/* 
(풀이)
각각의 패턴에 맞는 배열을 생성하고 filter메서드를 통해 answer와 일치하는 개수를 뽑아서 그 값이
최대값과 같으면 result 배열에 push 해준다. 
나머지값을 넣어줘야 한다는걸 몰라서 계속 제출에 실패했는데 결국 구글링해서 찾아 썼지만 이유는 알았다.
i가 5 일때 personOne은 다시 0번째 인덱스 값 1을 보여주고 answer가 personOne배열 보다 길때 다시 순회를 돌 수 있다.
히든케이스는 answer의 길이가 더 길때 인거같다.
*/
