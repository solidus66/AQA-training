// Задание 4. Test Results Analyzer
// Создай массив testResults:
// ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED"]
// Выполни следующие действия:
// 1. Перебери массив с помощью for.
// 2. Выведи каждый результат в консоль.
// 3. Посчитай количество успешно пройденных тестов (PASSED).
// 4. Посчитай количество проваленных тестов (FAILED).
// 5. Выведи общее количество тестов, количество успешных и количество проваленных.

const testResults = ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED"];
let passedTests = 0;
let failedTests = 0;

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "FAILED") {
    failedTests++;
  } else {
    passedTests++;
  }
  console.log(`Result of test #${i}: ${testResults[i]}`);
}

console.log();
console.log(`Amount of passed tests: ${passedTests}`);
console.log(`Amount of failed tests: ${failedTests}`);
console.log(`Total amount of tests:`, testResults.length);
