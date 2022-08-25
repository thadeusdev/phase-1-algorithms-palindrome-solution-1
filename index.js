function reverseString(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = reverseString(word);
  //compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  // reverse the input string

  // if the reversed string in the same as the input
  //   return true
  // else
  //   return false
*/

/*
  // Add written explanation of your solution here
  // make a function that returns true if a word is palinrum and false if not.
  // That means if the word is the same as the word in reverse, i should return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
