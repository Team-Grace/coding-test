function solution1(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayIndex = new Date(2016, a - 1, b).getDay();

  return days[dayIndex];
}

function solution2(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = -1;

  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= dates[i - 1]; j++) {
      week += 1;

      if (week === 7) week = 0;
      if (a === i && b === j) {
        return days[week];
      }
    }
  }
}

/**
 * (풀이)
 * solution1은 Date객체와 getDay() 메서드를 이용해서 결과를 도출하였다.
 * 이때 요일을 담아둔 days라는 배열을 하나 생성해 이를 활용했다.
 *
 * solution2는 2중 for문과 days, dates 배열을 이용해서 해결하였는데,
 * 여러모로 solution1이 더 깔끔해보인다
 */
