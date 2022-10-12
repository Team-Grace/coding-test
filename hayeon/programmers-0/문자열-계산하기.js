function solution(my_string) {
  const arr = my_string.split(" ").filter((el) => el !== "+");
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      result -= parseInt(arr[i + 1] * 2);
    } else {
      result += parseInt(arr[i]);
    }
  }
  return result;
}

/*
 * 풀이
 * 구글링할때 eval()로 문자열을 계산할 수 있었는데.. 잘 쓰지 않는 방법이라고 한다.
 * 그래서 첫번째 문제와 비슷하게 풀었는데 계속 실패했다.
 * 원인은 "-" 가 들어갔을 때 였는데 아무리해도 모르겠어서 결국 윤우님 코드 참고했다.
 *
 * "-" 일 때 "-" 뒤 숫자를 2배 해주고 빼줘야 하는데
 * 이유는 "-"가 아닐 때 그 숫자가 다시 + 되기때문에 한 번 더 빼줘야 했다!!!
 * 난 계속 더하기만 되서 도대체 왜 안되나 했는데..
 * 어떻게 생각하신건지.. 대단했다..
 */
