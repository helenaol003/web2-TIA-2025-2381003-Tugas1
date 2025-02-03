//isPalindrome

function isPalindrome (x: number): boolean {
    if (x < 0) return false;

    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));