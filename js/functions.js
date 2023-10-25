function checkStrLenght(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

function checkPalindrom(string) {
  let normString = string.replaceAll(' ', '');
  normString = normString.toUpperCase();

  let newString = '';

  for (let i = normString.length - 1; i >= 0; i--) {
    const symbol = normString.at(i);
    newString += symbol;
  }

  if (newString === normString) {
    return true;
  } else {
    return false;
  }
}

checkStrLenght('hdhxhxh', 10);
checkPalindrom('di ana');

// Test
// console.log(checkStrLenght('hdhxhxh', 10));
// console.log(checkPalindrom('di ana'));
