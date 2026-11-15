// Задание 4. Test Analyzer
// Создай объект testResult со свойствами:
// - title: "Payment test"
// - status: "PASSED"
// - duration: 2300
// Выполни следующие действия:
// 1. Проверь наличие свойства status с помощью in.
// 2. Проверь наличие свойства error с помощью Object.hasOwn().
// 3. Получи массив ключей объекта через Object.keys().
// 4. Получи массив значений через Object.values().
// 5. Выведи результаты в консоль.

const testResult = {
  title: "Payment test",
  status: "PASSED",
  duration: 2300,
};

console.log(`Is there "status": ${"status" in testResult}`);
console.log(`Is there "error": ${Object.hasOwn(testResult, "error")}`);
console.log("Keys:", Object.keys(testResult));
console.log("Values:", Object.values(testResult));
