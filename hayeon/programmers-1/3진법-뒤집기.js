function solution(n) {
  const ternary = n.toString(3);
  const reversed = ternary.split("").reverse().join("");
  const answer = parseInt(reversed, 3);

  return answer;
}

/* 풀이
3진수 변환 - 문자열 뒤집기 - 10진수 변환

문자열 뒤집기할 때 그냥 단순하게 reverse()만 했는데 안되서 구글링!
"문자열 뒤집기"는 split('').reverse().join('') -> 자르고, 뒤집고 다시 붙여야 했던 것

처음엔,

function solution(n) {
    const num = 0;

    const ternary = num.toString(3);
    const reversed = ternary.split('').reverse().join('');
    const answer = parseInt(reversed, 3);

    return answer;
}

위 처럼 풀었는데 안에 const num = 0; 으로 해서 그런지 계속 값이 0만 반환됨..
생각해보니 0 으로 이미 선언을 해버려서 계속 0이 나오는 것..

그렇다면..
function solution() {

    const ternary = n.toString(3);
    const reversed = ternary.split('').reverse().join('');
    const answer = parseInt(reversed, 3);

    return answer;
}
은 solution() 안에 n을 빼서 에러가 뜸..
무조건 ()안에 n을 넣어줘야 되는 것인강..?

*/
