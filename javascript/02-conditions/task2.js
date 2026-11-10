// Задание 2. Test Result
// Есть переменные:
// const testName = "Login test";
// const isPassed = true;
// const duration = 4.5;
// Необходимо:
// 1. Если isPassed равен true, вывести PASSED.
// 2. Если false — вывести FAILED.
// 3. Если тест пройден и выполнялся меньше 5 секунд — дополнительно вывести FAST TEST.
// 4. Если тест не пройден — вывести TEST NEEDS INVESTIGATION.
// Используй if / else и логические операторы.

const testName = "Login test";
const isPassed = true;
const duration = 4.5;

console.log(`TEST NAME: ${testName}`);
console.log(`Results:`);

if (isPassed) {
  console.log("PASSED");
  if (duration < 5) {
    console.log("FAST TEST");
  }
} else {
  console.log("FAILED");
  console.log("TEST NEEDS INVESTIGATION");
}
