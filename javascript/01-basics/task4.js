// Задание 4. Формирование отчёта
// Есть данные:
// const testName = "Authorization test";
// const status = "PASSED";
// const duration = 3.5;
// Сформируй строку следующего формата:
// Test: Authorization test | Status: PASSED | Duration: 3.5 sec
// Используй шаблонную строку.

const testName = "Authorization test";
const status = "PASSED";
const duration = 3.5;

console.log(
  `Test: ${testName} | Status: ${status} | Duration: ${duration} sec`,
);
