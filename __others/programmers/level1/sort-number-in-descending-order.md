# 정수 내림차순으로 배치하기

[알고리즘 연습 - 정수 내림차순으로 배치하기 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12933)

```
문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
```

## My solution

```javascript
function solution(n) {
  return +String(n) // String을 number로
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
```

## Others

```javascript
function solution(n) {
  return parseInt(
    (n + "") // string
      .split("") // split into n word
      .sort() // sort
      .reverse()
      .join("")
  );
}
```
