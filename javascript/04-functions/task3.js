// Задание 3. Test Duration Calculator
// Создай функцию calculateAverageTime, которая:
// 1. Принимает два параметра:
//    - totalExecutionTime — общее время выполнения тестов.
//    - totalTests — количество тестов.
// 2. Возвращает среднее время выполнения одного теста.
// Вызови функцию с данными:
// const totalExecutionTime = 75;
// const totalTests = 15;
// Ожидаемый результат:
// Average test time: 5 sec

function calculateAverageTime(totalExecutionTime, totalTests) {
  return totalExecutionTime / totalTests;
}

const totalExecutionTime = 75;
const totalTests = 15;

console.log(
  `Average test time: ${calculateAverageTime(totalExecutionTime, totalTests)} sec`,
);
