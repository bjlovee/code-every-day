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