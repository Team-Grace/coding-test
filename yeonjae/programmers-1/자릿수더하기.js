function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
}

/*
(풀이)
각 자릿수의 합을 구해야하기때문에 split을 써서 배열에 담은 후 더해주면 된다생각했다
String를 통해 숫자 -> 문자열, split을 통해 문자 -> 배열 
배열의 합을 구하기위해 reduce를 사용해서 리턴! 
*/
