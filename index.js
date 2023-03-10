// Day 1 0f 100
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

  // Day 2 0f 100
  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

  // Day 3 0f 100 
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