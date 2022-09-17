function solution(a, b) {
  const dayStr = new Date(2016, a - 1, b).toString();

  return dayStr.slice(0, 3).toUpperCase();
}

/*
(풀이)
new Date를 사용해서 쉽게 푼것같다. 
주의할 점은 month는 일반 월이 아니라 인덱스로 되어있어서 1월이라면 0이 들어가야한다. (a -> a-1)

2016년 a월 b일 을 new Date객체를 사용해서 구한후,
slice를통해 원하는 값만 뽑아내고 대문자로 변환해서 리턴해주면된다 !
*/
