const convertTemp = (temp, unit) => {
  if (isNaN(temp)) return "Please enter a valid number for temperature";
  unit = unit.toUpperCase();
  if (unit === "C") {
    let fahrenheit = (temp * 9) / 5 + 32;
    return `The temperature in fahrenheit is: ${fahrenheit} F`;
  } else if (unit === "F") {
    let celsius = ((temp - 32) * 5) / 9;
    return `The temperature in celsius is: ${celsius} C`;
  } else {
    return "Invalid unit. Use 'C' or 'F'";
  }
};

let temp = Number(prompt("Enter the temperature: "));
let unit = prompt("Enter the unit (C/F): ");
console.log(convertTemp(temp, unit));
