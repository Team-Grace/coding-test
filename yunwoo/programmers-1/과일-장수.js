function solution(k, m, score) {
  const copySortedScore = [...score].sort((a, b) => a - b);
  let appleBox = [];
  let result = 0;

  while (copySortedScore.length >= 1) {
    appleBox.push(copySortedScore.pop());

    if (appleBox.length === m) {
      const minScore = Math.min(...appleBox);
      result += minScore * m;
      appleBox = [];
    }
  }

  return result;
}

/*
(풀이)
배열을 오름차순으로 정렬해주고 while문으로 배열의 개수가 없어질 때까지 반복한다.
배열에서 요소를 하나씩 빼서 appleBox에 넣어주면서 배열의 길이가 m가 같아질경우 가장 낮은수를
result에 개수만큼 곱해서 넣어주고 다시 appleBox를 비워준다.
*/
