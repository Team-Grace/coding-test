function solution(id_pw, db) {
  const id = id_pw[0];
  const pwd = id_pw[1];
  let resultMsg = "";

  for (let i = 0; i < db.length; i++) {
    if (id === db[i][0] && pwd === db[i][1]) {
      resultMsg = "login";
    } else if (id === db[i][0] && pwd !== db[i][1]) {
      resultMsg = "wrong pw";
    } else if (id !== db[i][0] && pwd !== db[i][1]) {
      resultMsg = "fail";
    }
  }
  return resultMsg;
}
