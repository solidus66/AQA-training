// Задание 2. Test Manager
// Создай массив testCases со значениями:
// ["Login", "Registration", "Authorization"]
// Выполни следующие действия:
// 1. Добавь тест Payment в конец массива.
// 2. Удали первый тест.
// 3. Добавь тест Logout в начало массива.
// 4. Выведи итоговый массив.
// 5. Выведи его длину.

const testCases = ["Login", "Registration", "Authorization"];

testCases.push("Payment");
testCases.shift();
testCases.unshift("Logout");

console.log("Final array:", testCases);
console.log(`Amount of tests: ${testCases.length}`);
