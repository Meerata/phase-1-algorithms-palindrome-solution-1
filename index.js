function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = reverseString(word);
  // Compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Reverse the input string.
  - If the reversed string is equal to the input string, return true; otherwise, return false.
*/

/*
  Explanation:
  This function checks if a given word is a palindrome by comparing the original word with its reversed version.
*/

// Function to reverse a string
function reverseString(word) {
  return word.split("").reverse().join("");
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
