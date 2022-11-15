const isPalindrome = function(x) {
  // if (x < 0) {
  //     return false;
  // }

  const stringInt = x.toString();
  const lastIndex = x.length - 1;


  for (let i = 0; i < stringInt.length / 2; i++) {
      const startingFrontInt = stringInt[i];
      const startingBackInt = stringInt[lastIndex - i]

      if (startingFrontInt !== startingBackInt) {
          return false;
          console.log('returns false')
      }
  }
  console.log('returns true')
  return true;

};

export default isPalindrome;

