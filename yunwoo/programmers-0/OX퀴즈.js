function solution(quiz) {
  const result = [];

  for (let i = 0; i < quiz.length; i++) {
    const removeSpaces = quiz[i].split(" ");

    if (removeSpaces[1] === "-")
      result.push(parseInt(removeSpaces[0]) - parseInt(removeSpaces[2]));
    else result.push(parseInt(removeSpaces[0]) + parseInt(removeSpaces[2]));

    result[i] =
      parseInt(removeSpaces[removeSpaces.length - 1]) === result[i] ? "O" : "X";
  }

  return result;
}

/*
(풀이)
빈 배열 하나를 이용해 풀이.
for문을 연산문자열의 갯수만큼 돌려주고 지역변수로 주어진 quiz를 공백으로split한 변수를 생성
변수의 연산자 부분의 인덱스가 -일 경우와 + 일경우를 고려해 덧셈 또는 뺄셈을 해서 result 배열에 push
push한 값이 quiz의 마지막 인덱스의 값과 같으면 O 다르면 X 를 넣어준다.
*/
