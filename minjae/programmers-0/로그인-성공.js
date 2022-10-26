function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const filteredId = db.filter((data) => data[0] === id)[0];

  if (!filteredId) return "fail";
  else if (filteredId[1] !== pw) return "wrong pw";
  return "login";
}
