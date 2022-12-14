function solution(my_string) {
  const arr = my_string.split(" ");
  let result = Number(arr[0]);

  arr.forEach((el, i) => {
    const next = Number(arr[i + 1]);

    if (el === "+") result += next;
    else if (el === "-") result -= next;
  });

  return result;
}

/**
 * (풀이)
 * my_string을 split을 이용해 배열로 만든 후 이를 순회하면서 현재 요소가 더하기 또는 빼기 일 경우
 * 그 다음 요소를 result에 누적한다.
 */
