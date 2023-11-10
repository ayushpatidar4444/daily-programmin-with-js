let num1 = 56;
let num2 = 90;
let num3 = 115;
let largestNum;

if (num1 > num2 && num1 > num3) {
  largestNum = num1;
} 
else if (num2 > num1 && num2 > num3) {
  largestNum = num2;
} 
else {
  largestNum = num3;
}

console.log(largestNum);