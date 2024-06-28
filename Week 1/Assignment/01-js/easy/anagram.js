/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
if(str1.length != str2.length) return false;
  str1arr = str1.split('').sort();
  str2arr = str2.split('').sort();
  for (let i = 0; i < str1.length; i++) {
    if (str1arr[i] != str2arr[i]) return false;
  }
  return true;
}

module.exports = isAnagram;

console.log(isAnagram('spar', 'rasp')); // true