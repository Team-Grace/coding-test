# 💻 Coding-Test

- 알고리즘/자료구조 및 코딩테스트 공부 저장소

<Br />

## 💥 코딩테스트 문제 사이트

- [프로그래머스(programmers)](https://programmers.co.kr/)
- [백준(BaekJoon)](https://www.acmicpc.net/)
- [리트코드(leetCode](https://leetcode.com/)
- [solved](https://solved.ac/)

<br />

## 🧑‍💻 스터디 목표

- 프로그래머스 레벨2 풀기, 백준 solved class3 달성하기
- 단기 목표
  - 프로그래머스 레벨1(일반 문제) 풀기 -> 프로그래머스 레벨1(카카오 기출) 풀기 -> 백준(클래스2) 풀기

<br />

### 😋 공부 방식

- 기본적으로 평일 `1문제` 푼다. 푸는 시간은 자유이며, 주말에는 평일동안 풀었던 5문제를 복습한다.
- 해당 저장소를 `clone`한다. 그리고 각자 `자신의 이름`으로 브랜치를 생성한다. `(ex - minjae)`
- 정해진 문제를 풀고, 본인 이름의 폴더에 풀이 파일을 추가하고 `push`한다. push를 해서 본인 이름의 branch에 반영됐다면 `master`로 PR보낸다. PR을 보낼 때 리뷰어로는 팀원 모두를 등록한다.
  - 기본적으로 1문제만 풀더라도 PR을 보낸다. (추가 push를 날리면 자동으로 반영된다.)
- 각자 공부하다가 공유하고 싶은 내용이 있으면 시간을 잡고 [게더 타운](https://app.gather.town/app/zfsk353C5Q0yCcNR/hiiiiiii)에서 함께 공유한다.
- 단순히 돌아가는 코드가 아닌 변수명/컨벤션/가독성/효율 모두 고려한 코드를 작성하며, 서로 더 좋은 코드가 무엇인지 함께 고민한다.
- 모든 PR은 일요일 `저녁 20시~24시` 사이에 `ssi02014(전민재)`가 master 브랜치로 반영한다.
- 월요일에 모든 팀원은 master를 `pull`해서 싱크를 맞춰준다.

<br />

## 😋 Pull Request 작성 예시

<img width="932" alt="스크린샷 2022-08-17 오전 12 38 44" src="https://user-images.githubusercontent.com/64779472/184920949-8bcb7349-1be8-465e-8df0-4cb5ebeb444e.png">

<br />

### 😋 Commit Message Convention

- add: 풀이 코드 추가
- refac: 리팩토링

```
add: 프로그래머스 레벨1 같은 숫자는 싫어 문제 풀이
refac: 프로그래머스 레벨1 같은 숫자는 싫어 문제 리팩토링
```

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
