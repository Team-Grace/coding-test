function solution(id_pw, db) {
  let result = "fail";

  for (const el of db) {
    if (el[0] === id_pw[0] && el[1] === id_pw[1]) result = "login";
    else if (el[0] === id_pw[0] && !(el[1] === id_pw[1])) result = "wrong pw";
  }

  return result;
}

/*
(풀이)
result의 기본값을 id와 password가 일치 하지 않을 경우로 놓고
for...of 문으로 db를 순회하면서 id과 password가 일치할 경우와 아이디만 일치할 경우를
조건문으로 판단하여 result에 문자열을 넣어준다.
*/
