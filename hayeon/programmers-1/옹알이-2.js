function solution(babbling) {
  let result = 0;

  const doubleBabbling = ["ayaaya", "yeye", "woowoo", "mama"];

  while (babbling.length) {
    let sound = babbling.pop();

    if (doubleBabbling.some((el) => sound.includes(el))) continue;

    sound = sound
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");

    sound = sound.replace(/[1234]/g, "");

    if (sound.length === 0) result++;
  }

  return result;
}

/**
 * 풀이
 * 옹알이 문제는...어려워서 풀다가 참고해서 풀었다...
 * 먼저 연속되는 경우의 발음을 배열에다가 넣어준다.
 * 연속되는 발음은 패스시키고 가능한 발음을 숫자로 바꿔준다.
 * 마지막으로 숫자를 공백으로 대체하고 sound 길이가 0이 되면 결과값에 숫자를 누적해준다.
 * 생각보다 어려워서.. 윤우님 코드도 참고하고 다시 풀어봐야겠다.....
 */
