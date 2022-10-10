function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

/**
 * 풀이
 * 처음엔 includes()를 이용해서 풀어야 하나? 생각을 했는데.. 마지막 케이스에선
 * 같은 이름이 두명 존재하므로 쓸 수 없다고 생각해 다른 풀이를 생각했다.
 * 문제를 보자마자 정렬을 한 번 해봐야겠다 생각을했어서 참여자와 완주자 모두 정렬을 했더니
 * 똑같은 순서대로 정렬되므로.. 위치가 다른 것만 리턴해주면 되는것이었다.
 */
