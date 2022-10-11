function solution(n, lost, reserve) {
  //체육복을 입을 수 있는 학생 수
  let answer = n;

  //전체학생이 1개씩 가지고있다고 가정
  let totalStudent = new Array(n).fill(1);

  //totalStudent배열에서 잃어버린학생은 -1, 여유분이 있는학생은 +1
  for (let i = 0; i < totalStudent.length; i++) {
    if (lost.includes(i + 1)) {
      totalStudent[i] -= 1;
    }
    if (reserve.includes(i + 1)) {
      totalStudent[i] += 1;
    }
  }

  //여유분이 있으면서 옆학생한테 빌려줄수있는경우
  for (let i in totalStudent) {
    if (totalStudent[i] == 2 && totalStudent[i - 1] == 0) {
      totalStudent[i] -= 1;
      totalStudent[i - 1] += 1;
    } else if (totalStudent[i] == 0 && totalStudent[i - 1] == 2) {
      totalStudent[i] += 1;
      totalStudent[i - 1] -= 1;
    }
  }

  //전체에서 체육복이 없는 친구 제거
  for (let student of totalStudent) {
    if (student === 0) {
      answer--;
    }
  }
  return answer;
}
