// Задание 3. Расчёт времени выполнения
// Тестовый набор содержит:
// - 12 тестов по 2 секунды;
// - 5 тестов по 4 секунды;
// - 3 теста по 10 секунд.
// Вычисли:
// 1. Общее количество тестов.
// 2. Общее время выполнения в секундах.
// 3. Среднее время выполнения одного теста.
// Используй переменные и арифметические операторы. Не забивай готовые результаты руками.

const groupOne = 12;
const secGroupOne = 2;

const groupTwo = 5;
const secGroupTwo = 4;

const groupThree = 3;
const secGroupThree = 10;

const numOfTests = groupOne + groupTwo + groupThree;
console.log(numOfTests);
const totalExecutionTime =
  groupOne * secGroupOne + groupTwo * secGroupTwo + groupThree * secGroupThree;
console.log(totalExecutionTime);
const averageTime = secondsOfTests / numOfTests;
console.log(averageTime);
