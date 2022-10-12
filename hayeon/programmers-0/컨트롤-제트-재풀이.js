function solution(s) {
  const numbers = [];

  for (const el of s.split(" ")) {
    el === "Z" ? numbers.pop() : numbers.push(el);
  }

  return numbers.reduce((acc, cur) => acc + +cur, 0);
}

/**
 * 풀이
 * 많은..생각을 거친 문제였다..
 *
 * 처음엔 "Z"의 위치를 알고, 앞에 위치한 값도 삭제해주려고
 * indexOf와 for문을 사용해서 해봤지만 실패했다.
 *
 * 그래서 두번째 방법으로
 *  const arr = s.split(" ");
 *
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "Z"){
            arr.splice(i, 1); //z삭제
            arr.splice(i - 1, 1); //z앞 삭제
            i--;
        }
    }
    해봤는데.. 케이스 2번과 7번이 통과하지않음..

    결국 풀긴했는데 온전히 스스로 생각하지 못해서 아쉬웠다..
    쉽게 풀 수 있던 문제였는데!
 */
