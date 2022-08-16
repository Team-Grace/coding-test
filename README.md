# 💻 Coding-Test

- 알고리즘/자료구조 및 코딩테스트 공부 저장소

<Br />

## 💥 코딩테스트 문제 사이트

- [프로그래머스(programmers)](https://programmers.co.kr/)
- [백준(BaekJoon)](https://www.acmicpc.net/)
- [리트코드(leetCode](https://leetcode.com/)

<br />

### 😋 공부 방식

- 매일 `1문제` 풀고 해당 저장소에 반영하기
- 각 인원마다 브랜치를 생성`(ex - minjae)`해서 정해진 문제를 풀고, 본인 폴더에 풀이 파일을 추가한 다음 `master`로 PR보낸다.

<br />

### 😋 Commit Message Convention

- Add(minjae): 같은 숫자는 싫어

<br />

## 🏃 백준 - 예시

```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
});
```

<br />

## 🏃 프로그래머스 - 예시

### ex) Level1 - 3진법 뒤집기

```javascript
function solution(n) {
  const reverseTernary = n.toString(3).split("").reverse();
  let answer = 0;

  let sum = "";
  reverseTernary.forEach((n) => (sum += n));
  return (answer = parseInt(sum, 3));
}
```

<br />
