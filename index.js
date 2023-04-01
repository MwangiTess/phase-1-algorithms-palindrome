function isPalindrome(data) {
  let word = data.split('').reverse().join('');
  
  if (data == word) {
    return true;
  } else {
    return false;
  };
}

isPalindrome("dad");

console.log(isPalindrome("abba")); 
console.log(isPalindrome('racecar'));
console.log(isPalindrome(`'a' "`));
console.log(isPalindrome('robot')); 
console.log(isPalindrome(`'ab' "`));





  /*Write your algorithm here
   Writing a function that returns true or false if the input is really a Pailindrome like madam or refer
  if the input is Madam the out put should be true and if input is furaha the output should be false */


/* 
  Add your pseudocode here
   create a variable called word, using the inbuilt method split it which will split a string into a substring eg true will be t r u e or m o m
  Then using reverse() it will reverse the order of elements of the word eg: t r u e will be e u r t or m o m
   After reversing we join the word back together it will be eurt or mom if  the word is a palindrome using the if conditional will return true or false

*/

/*
  Add written explanation of your solution here
  Incorporating the if...else conditional will return true or false for the argument passed in our function.

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


