function validatePIN(pin) {
  //Start coding here
  const length = pin.length;

  if (length !== 4 && length !== 6) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    let char = pin[i];
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return true;
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
