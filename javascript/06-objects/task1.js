// Задание 1. Test Case
// Создай объект testCase со свойствами:
// - title: "Login test"
// - status: "PASSED"
// - priority: "High"
// Выведи в консоль:
// 1. Весь объект.
// 2. Название теста.
// 3. Статус теста.
// 4. Приоритет теста.

const testCase = {
  title: "Login test",
  status: "PASSED",
  priority: "High",
};

console.log("Full object:", testCase);
console.log(`Title: ${testCase.title}`);
console.log(`Status: ${testCase.status}`);
console.log(`Priority: ${testCase.priority}`);
