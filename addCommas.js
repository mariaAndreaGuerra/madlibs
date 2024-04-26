function addCommas(number) {
  // Convert number to string
  let numString = number.toString();
  
  // Split the string into parts separated by decimal point
  let parts = numString.split('.');
  
  // Extract integer part
  let integerPart = parts[0];
  
  // Add commas to integer part
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // If decimal part exists, concatenate it with the integer part
  if (parts.length > 1) {
      return integerPart + '.' + parts[1];
  } else {
      return integerPart;
  }
}

module.exports = addCommas;