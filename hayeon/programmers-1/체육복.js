function solution(n, lost, reserve) {
  const lostStudent = lost
    .sort((a, b) => a - b)
    .filter((el) => !reserve.includes(el));
  let reserveStudent = reserve
    .sort((a, b) => a - b)
    .filter((el) => !lost.includes(el));

  const noUniform = lostStudent.filter((lost) => {
    const lend = reserveStudent.find(
      (reserve) => Math.abs(lost - reserve) === 1
    );
    if (!lend) return lost;

    reserveStudent = reserveStudent.filter((el) => el !== lend);
  });
  return n - noUniform.length;
}

/**
 * 풀이
 * 너무..어려웠던 문제.. 끄적이면서 결국 (전체학생수 - 여벌 옷을 받지 못한 학생 수)가 답이었는데
 * 문제를 푸는데 너무 헷갈렸다.
 *
 * 1. 배열 안에서 숫자가 순서대로 있어야 생각하기 편하기 때문에 sort로 오름차순 정렬을 한다.
 *
 * 2. 여벌 체육복을 가져온 학생이 도난을 당했을 때, lost와 reserve 둘다 해당되지 않는다.
 * (이 학생은 도난당하긴 했지만 자기가 입을 체육복은 있기 때문에.. 빌려줄 수도 없음)
 * 따라서 이 학생을 제외한 즉, 실제로 도난 당한 학생들과 여벌 체육복을 가진 학생들을 filter함수를 이용해 구한다.
 *
 * 3. 실제로 유니폼을 가져오지 않은 사람을 구하기 위해 변수로 설정해 두고
 * Math.abs(절댓값 리턴)을 통해 체격이 1 차이나는 학생을 구한다. 이때 find(첫번째 값 리턴)를 통해 잃어버린 친구보다
 * 체격이 1작은 친구를 구해야함 (그래야 2, 4가 도난 당했을 때 1이 2를 빌려주고 3이 4를 빌려주게 됨.
 * 이때 3이 2를 빌려주게 되면 1에게 빌려줄 사람이 없다.)
 *
 * 4. 만약 체격차가 1이 아닐 경우, 그대로 lost를 리턴한다.
 * 예) 도난 [3] 이고 여유 [1] 일때 빌려줄 수 없으므로.. 그냥 [3]리턴
 *
 * 5. 체격차가 1인 학생은 다른 사람에게 빌려줄 수 있으므로 reserveStudent에서 제외한다.
 */
