function reverseIntToString(num) {
  if (num < 10) {
    return num + "";
  } else {
    // 使用取模和整除操作获取整数的最后一位和剩余数字
    let lastDigit = num % 10;
    let remainingDigits = Math.floor(num / 10);
    return lastDigit + reverseIntToString(remainingDigits);
  }
}

console.log(reverseIntToString(1234));
