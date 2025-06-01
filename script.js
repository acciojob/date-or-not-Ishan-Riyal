var isDate = function (input) {
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If input is a string or number, try to parse it
  if (typeof input === "string" || typeof input === "number") {
    const date = new Date(input);
    return !isNaN(date);
  }

  // All other types (objects, arrays, etc.) are not valid
  return false;
};

// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
