# **Day #1**
<br>

## **Multiples of 3 or 5 challenge (codewars)**

```
function solution(number){
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
         sum += i;
      }
    }
      
    return sum
  }
  console.log(solution(sum));
```
<br>

# **Day 2**
<br>

## **Reverse words (codewars)**

```
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
```

# **Day 3**

## **Sum of Digits / Digital Root**

```
function digitalRoot(n) {
  let root = n;
  while (root > 9) {
    root = root
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
  }
  return root;
}
```
