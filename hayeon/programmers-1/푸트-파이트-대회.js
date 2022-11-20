function solution(food) {
  const leftSide = [];

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);

    leftSide.push(String(i).repeat(count));
  }

  const result = [leftSide.join(""), 0, leftSide.reverse().join("")];

  return result.join("");
}

/**
   * 풀이
   *
      const evenArr = [1];

      for(let i = 1; i < food.length; i++){
          food[i] % 2 === 1 ? evenArr.push(food[i] - 1) : evenArr.push(food[i]);
      }

      처음에는 위 풀이도 같이 써서 홀수를 짝수로 만들어 배열에 담았는데
      어처피 왼쪽에 배치될 숫자를 모두 2로 나누고 배열에 담는다면 위 풀이과정은 필요없어서 삭제했다.
      계속 짝수로만 만들고 배열하려고 생각해서 뒤죽박죽 됐는데 단순하게 2로 나누고 그 수만큼
      인덱스를 배열에 담아주면 됐던 문제다!
   */
