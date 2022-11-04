function solution(lines) {
  const listedLinesArray = [];
  const duplicateObject = new Set();

  lines.forEach((item) => {
    const temp = [];

    for (let i = item[0]; i <= item[1] - 1; i++) {
      temp.push(i);
    }

    listedLinesArray.push(temp);
  });

  const copyListedLines = [[...listedLinesArray[0]], [...listedLinesArray[1]]];

  copyListedLines.map((item, idx) => {
    for (let i = 2; i > idx; i--) {
      for (const el of item) {
        const findIdx = listedLinesArray[i].findIndex((value) => value === el);
        if (findIdx !== -1) duplicateObject.add(el);
      }
    }
  });

  return duplicateObject.size;
}

/*
(풀이)
주어진 lines를 돌면서 lines의 숫자를 순서대로 나열해 둔 배열을 만들고
겹치는 요소를 확인할 0,1 번째 index배열만 빼와서 따로 변수에 저장해 주고 map으로 순회를 돌아준다.
이때 0번째 index는 2번 1번째 index는 한번만 돌아야 하는 조건을 만드는데 어려웠다.
map안에 for문으로 횟수, 그리고 for of문으로 요소를 돌면서 findIndex로 -1이 아닐 경우에만
겹치는 선의 요소를 set 객체에 푸시해줬다.
*/
