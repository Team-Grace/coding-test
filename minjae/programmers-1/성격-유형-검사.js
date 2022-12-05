function getResultPersonalityType(pointBoard) {
  const pointBoardEntries = Object.entries(pointBoard);
  let result = "";

  // 현재 타입과 다음 타입의 포인트를 비교해 최종 타입을 result에 적용
  for (let i = 0; i < pointBoardEntries.length; i += 2) {
    const [curType, curPoint] = pointBoardEntries[i];
    const [nextType, nextPoint] = pointBoardEntries[i + 1];
    const finalType = curPoint < nextPoint ? nextType : curType;

    result += finalType;
  }

  return result;
}

function solution(survey, choices) {
  const points = [0, 3, 2, 1, 0, 1, 2, 3];
  const pointBoard = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  // 타입 별 포인트 합산
  choices.forEach((choice, i) => {
    const selectedType = choice <= 4 ? survey[i][0] : survey[i][1];

    pointBoard[selectedType] += points[choice];
  });

  return getResultPersonalityType(pointBoard);
}
