// Задание 2. Test Case Manager
// Создай объект testCase со свойствами:
// - title: "Registration test"
// - status: "PASSED"
// - browser: "Chrome"
// Выполни следующие действия:
// 1. Измени статус на "FAILED".
// 2. Добавь свойство duration со значением 1500.
// 3. Удали свойство browser.
// 4. Выведи итоговый объект.

const testCase = {
  title: "Registration test",
  status: "PASSED",
  browser: "Chrome",
};

testCase.status = "FAILED";
testCase.duration = 1500;
delete testCase.browser;

console.log(testCase);
