function setSortAndFliter(arr, arr2) {
  return arr.sort((a, b) => a - b).filter((v) => !arr2.includes(v));
}

function solution(n, lost, reserve) {
  const noPeClothesStudent = setSortAndFliter(lost, reserve);
  const extraPeClothesStudent = setSortAndFliter(reserve, lost);

  for (const el of noPeClothesStudent) {
    const extraUniformidx = extraPeClothesStudent.findIndex(
      (value) => value === el - 1 || value === el + 1
    );

    extraUniformidx !== -1
      ? extraPeClothesStudent.splice(extraUniformidx, 1)
      : n--;
  }

  return n;
}

/*
(풀이)
오름차순 정렬과 체육복을 도둑맞았지만 여유분이 있는 학생을 제거해주는 함수 setSortAndFilter를 주어진 두 배열에 사용해
변수에 할당하고 for...of문으로 newLost 반복문을 돌려준 후 findIndex메서드로 noPeClothesStudent 배열의 요소에서 -1 작은값부터
+1 큰값이 있는지 확인해주고 둘다 없을경우 n--; 하나라도 있을경우 해당 index요소를 제거해준다.
*/
