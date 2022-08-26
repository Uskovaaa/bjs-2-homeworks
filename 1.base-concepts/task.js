"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let discriminant = b ** 2 - 4 *a * c;
  if (discriminant === 0) {
    arr[0] = - b / (2 * a);
  } else if (discriminant >= 0) {
      arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
      arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } 
  
  // код для задачи №2 писать здесь
  let credit = amount - contribution; //тело кредита
  let currentDate = new Date(); //текущая дата
  let countMonth = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear())); //счётчик количества месяцев
  let percentMonth = percent / 100 / 12; //процент за месяц делённый на 100
  let monthlyPayment = credit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonth) - 1))); //ежемесячный платёж
  totalAmount = parseFloat((monthlyPayment * countMonth).toFixed(2)); //общая сумма кредита
  
  return totalAmount;
}
