function solution(n) {
  let arr = [];
   
  for (let i = 1; i < n; i++) {
    if (n % i === 1)
      arr.push(i);
    }
    
  return Math.min(...arr);
}

/*
(풀이)
n을 x로 나눈나머지를 모두 배열안에 넣어놓고,
Math함수를 통해 가장작은 자연수를 리턴! 
*/