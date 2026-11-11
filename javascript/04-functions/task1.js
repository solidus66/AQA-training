// Задание 1. Test Logger
// Создай функцию logTestStart, которая:
// 1. Принимает название теста через параметр testName.
// 2. Выводит в консоль сообщение Starting test: TestName.
// 3. Вызови функцию минимум два раза с разными названиями тестов.
// Ожидаемый результат:
// Starting test: Login test
// Starting test: Registration test

function logTestStart(testName) {
  console.log(`Starting test: ${testName}`);
}

logTestStart("Login test");
logTestStart("Registration test");
