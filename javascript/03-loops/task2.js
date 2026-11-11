// Задание 2. Failed Test Detector
// Исходные данные:
// const totalTests = 10;
// const failedTest = 6;
// Необходимо перебрать все тесты от 1 до totalTests.
// Требования:
// - Если номер текущего теста совпадает с failedTest, вывести FAILED.
// - Для остальных тестов вывести PASSED.
// - Использовать continue, чтобы пропустить обычный вывод для упавшего теста.

const totalTests = 10;
const failedTest = 6;

for (let testNumber = 1; testNumber <= totalTests; testNumber++) {
  if (testNumber === failedTest) {
    console.log(`Test #${testNumber} - FAILED`);
    continue;
  }
  console.log(`Test #${testNumber} - PASSED`);
}
