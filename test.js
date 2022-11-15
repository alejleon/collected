const isPalindrome = function (x: number) {
  const stringInt: string = x.toString();
  const lastIndex = stringInt.length - 1;

  for (let i = 0; i < stringInt.length / 2; i++) {
    const startingFrontInt = stringInt[i];
    const startingBackInt = stringInt[lastIndex - i];

    if (startingFrontInt !== startingBackInt) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;
