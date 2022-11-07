function solution(dots) {
  const parallelArr = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      //기울기공식
      const paralle = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);

      //기울기 겹치면 1 안겹치면 0
      if (parallelArr.includes(paralle)) return 1;
      parallelArr.push(paralle);
    }
  }
  return 0;
}
