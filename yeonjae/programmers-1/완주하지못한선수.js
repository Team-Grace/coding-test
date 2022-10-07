function solution(participant, completion) {
  const player = [];
  let answer = "";

  for (let i = 0; i < participant.length; i++) {
    if (player[participant[i]] === undefined) {
      player[participant[i]] = 1;
    } else {
      player[participant[i]]++;
    }
  }

  for (let i = 0; i < completion.length; i++) {
    player[completion[i]]--;
  }

  for (let i = 0; i < participant.length; i++) {
    if (player[participant[i]] === 1) {
      return participant[i];
    }
  }
}
