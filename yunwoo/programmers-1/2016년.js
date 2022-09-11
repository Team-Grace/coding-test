function solution(a, b) {
  const resultDay = new Date(2016, a - 1, b);

  switch (resultDay.getDay()) {
    case 0:
      return "SUN";

    case 1:
      return "MON";

    case 2:
      return "TUE";

    case 3:
      return "WED";

    case 4:
      return "THU";

    case 5:
      return "FRI";

    case 6:
      return "SAT";
  }
}
/*
(풀이)
Date 값을 구해주고 반환되는 값을 switch문으로 값마다 리턴값을 작성하여 제출
*/
