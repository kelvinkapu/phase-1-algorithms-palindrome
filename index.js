function reverse(word){
  let splitWord=word.split('')
  let reverseSplit= splitWord.reverse('')
  let jointWord=reverseSplit.join('')
  return jointWord
}

function isPalindrome(word) {
  // Write your algorithm here
 //reverse word 
 reversedWord=reverse(word)

 //reversed word will either return true if it is a palindrome and false if not
if (word===reversedWord) 
return true 
else 
return false

}



/* 
  Add your pseudocode here
//a reversed word will return true
a word that isn't reversed will return false */

/*
  Add written explanation of your solution here
  I have turned the word to array by spit, then reversed the word.
  After that I joined the reversed word. Then compared it to the main word
  
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
