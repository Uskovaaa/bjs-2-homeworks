"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let discriminant = b ** 2 - 4 *a * c;
  if (discriminant < 0) {
    return arr = [];
  } else if (discriminant === 0) {
    arr[0] = - b / (2 * a);
    return arr;
  } else if (discriminant >= 0) {
      arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
      arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
      return arr; // array
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
