function solution(n, lost, reserve) {
  // (1) 오름차순 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // (2) 여벌을 가져온 학생이 도난 당할 경우
  const newLost = lost.filter((el) => !reserve.includes(el));
  const newReserve = reserve.filter((el) => !lost.includes(el));
  // 빌리지 못한 학생들의 수를 가져옴
  const notBorrowedStudentsLength = getNotBorrowedStudentsLength(
    newLost,
    newReserve
  );

  return n - notBorrowedStudentsLength;
}

function getNotBorrowedStudentsLength(lost, reserve) {
  const copyLost = [...lost];

  for (const cur of reserve) {
    const prevIdx = copyLost.indexOf(cur - 1);
    const nextIdx = copyLost.indexOf(cur + 1);

    // (3) prev부터 구해야 함
    if (prevIdx !== -1) {
      copyLost.splice(prevIdx, 1);
    } else if (nextIdx !== -1) {
      copyLost.splice(nextIdx, 1);
    }
  }

  return copyLost.length;
}

/**
 * (풀이)
 * 히든 케이스 대응 코드 설명
 * (1) lost, reserve가 순서가 보장되지 않는 경우의 수를 대응하기 위해 sort로 정렬
 * (2) 여벌을 가져온 학생이 도난을 당한 경우의 케이스를 대응하기 위해 사전에 filter로 공통 부분을 제거
 * (3) getNotBorrowedStudentsLength에서 prev부터 구해야 하는 이유는 다음과 같다.
 * 예제
 * n = 5
   lost = [1,3] 
   reserve = [2,4]
   의 경우 reserve에서 2는 lost의 1과 3을 모두 빌려줄 수 있다. 
   따라서 2가 1에게 빌려주고, 4가 3에게 빌려주면 5명 모두 수업에 참여가 가능하다.
   하지만 reserve에서 2가 3을 빌려주게 된다면 1은 체육복을 빌릴 수가 없다. 따라서 항상 prev부터 체크해야된다.
 */
