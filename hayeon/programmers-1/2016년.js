function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const date = new Date();
  date.setFullYear(2016, a - 1, b);

  const result = days[date.getDay()];

  return result;
}

/**
 * 풀이
 * 1. 먼저 days를 배열에 담아 설정해주고
 * 2. new Date()를 이용해 2016년 a월 b일을 설정해준다.
 * 3. 이 때, 자바스크립트에서 월은 (현재 월 - 1)을 해줘야한다! (예: 2월은 자바스크립트에서 1로 나옴)
 * 따라서 입출력값의 5월은 자바스크립트에서 4로 나올 것. (결국 a - 1 월이 되어야 함)
 * 4. 마지막으로 배열에서 그 날의 요일을 받아오면 된다.
 */
