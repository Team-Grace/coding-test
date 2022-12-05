function solution(participant, completion) {
  const checkBoard = {};

  for (const player of participant) {
    checkBoard[player] = (checkBoard[player] || 0) + 1;
  }

  for (const player of completion) {
    checkBoard[player]--;
  }

  for (const player in checkBoard) {
    if (checkBoard[player]) return player;
  }
}
