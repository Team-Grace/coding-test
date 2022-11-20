function solution(food) {
  const result = [0];

  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] % 2 === 0) {
      for (let j = 1; j < (food[i] + 1) / 2; j++) {
        result.push(i);
        result.unshift(i);
      }
    } else {
      for (let j = 1; j < food[i] / 2; j++) {
        result.push(i);
        result.unshift(i);
      }
    }
  }
  return result.join("");
}

/*
(풀이)
물 한잔이 들어있는 배열 result를 만들고 food.length만큼 for문을 도는데
제일 칼로리가 낮은부분이 바깥쪽이어야 하므로 역순으로 돌려준다.
요소를 순회하며 food[i]가 홀수 인지 짝수 인지를 판별해서 그 갯수만큼 배열의 양쪽으로
push unshift 해준다.
*/
