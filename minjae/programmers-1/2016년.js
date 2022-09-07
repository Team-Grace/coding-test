function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayIndex = new Date(2016, a - 1, b).getDay();

  return days[dayIndex];
}

/**
 * (풀이)
 * Date객체와 getDay() 메서드를 이용해서 결과를 도출하였다.
 * 이때 요일을 담아둔 days라는 배열을 하나 생성해 이를 활용했다.
 */
