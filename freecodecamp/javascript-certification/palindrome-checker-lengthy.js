/*
Palindrome Checker:

"JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes."
*/

// first attempt, lengthy.
function palindrome(str) {
  let matched = str.match(/[a-z]|\d/ig);
  let frwrd = matched.join("").toLowerCase();
  //console.log("forwards:",frwrd);
  let bckwrdArr = [];
  var count = matched.length;
  while (count > 0) {
    bckwrdArr.push(matched[count-1]);
    count--;
  }
  let bckwrd = bckwrdArr.join("").toLowerCase();
  //console.log("backwards:",bckwrd);
  let equal = bckwrd == frwrd ? true : false;
  //console.log("equal:",equal);
  return equal;
};

// tests:
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
