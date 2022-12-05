function solution(n, arr1, arr2) {
  const result = [];

  const firstMap = arr1.map((el) => el.toString(2).padStart(n, 0));
  const SecondMap = arr2.map((el) => el.toString(2).padStart(n, 0));

  const fullMap = [];

  for (let i = 0; i < n; i++) {
    fullMap.push(String(+firstMap[i] + +SecondMap[i]).padStart(n, 0));
  }

  for (let num of fullMap) {
    result.push(
      num
        .split("")
        .map((el) => (el === "0" ? (el = " ") : (el = "#")))
        .join("")
    );
  }

  return result;
}

/**
 * 풀이
 * 1. 처음에 2개의 map을 2진수로 변환해준다.
 * 2. 두 지도의 값을 더해 새로운 배열(fullMap)을 담을 변수를 만든다.
 * 3. fullMap에 두 지도의 값을 더하고 padStart를 이용해 빈 공간은 0으로 채워준다.
 * 4. fullMap의 값을 split으로 쪼개준 후, 다시 그 배열을 돌면서 쪼개진 값이 0이면 공백을 넣고 0이상이면 #을 대입한다.
 */
