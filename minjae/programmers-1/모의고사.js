function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const counters = getCounters(answers, patterns);
  const maxNum = Math.max(...counters);

  return counters.reduce((acc, cur, i) => {
    if (cur === maxNum) acc.push(i + 1);
    return acc;
  }, []);
}

function getCounters(answers, patterns) {
  const counters = [0, 0, 0];

  answers.forEach((answer, i) => {
    patterns.forEach((pattern, j) => {
      if (answer === pattern[i % pattern.length]) {
        counters[j]++;
      }
    });
  });

  return counters;
}

/**
 * (풀이)
 * 해당 문제는 수포자1, 2, 3 학생들의 각각의 정답 패턴을 미리 선언한다.
 * 그리고 answers를 순회하면서 2중 forEach로 patterns도 순회해 answer과 pattern를 비교해 정답일 때를 찾는다.
 * 만약, 정답을 맞춘다면 맞췄을 때 학생 인덱스를 counters 인덱스에 대응해 값을 증가시킨다.
 * 그리고 가장 많이 맞춘 사람을 고르는 것이기 때문에 (중복 허용) Math.max를 구해서 많이 맞춘 횟수를 찾고,
 * reduce를 이용해 maxNum과 같은 학생을 모은 배열을 리턴함으로써 풀었다.
 */
