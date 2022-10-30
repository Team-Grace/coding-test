function solution(chicken) {
  let coupon = 0;
  let result = 0;

  for (let i = 1; i <= chicken; i++) {
    coupon++;

    if (coupon === 10) {
      coupon = 0;
      result++;
      coupon++;
    }
  }
  return result;
}

/*
(풀이)
각각 쿠폰, 결과값을 만들고
for문을 돌며 coupon이 10개 일경우 result(서비스치킨)을 1개 늘려주고
쿠폰을 0으로 다시 할당한 후 서비스 치킨에 대한 쿠폰++ 을 해준다.
*/
