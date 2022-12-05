function solution(id_pw, db) {
  let result = "fail";

  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
      result = "login";
    } else if (id_pw[0] === db[i][0]) {
      result = "wrong pw";
    }
  }
  return result;
}

/**
 * 풀이
 * 처음엔 result = ""; 를 선언하고
 * else if 다음 else result = "fail"; 을 했는데 1번 케이스가 통과되지 않았다.
 * 생각을 해봤는데.. id_pw[1] === db[i][1] 만 일치했을 때의 값을 비교하지 않아서 그런걸까 싶기도 하다..
 */
