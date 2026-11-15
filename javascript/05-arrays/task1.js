// Задание 1. Test List
// Создай массив testCases, содержащий названия трёх тестов:
// - Login
// - Registration
// - Authorization
// Выведи в консоль:
// 1. Весь массив.
// 2. Первый элемент массива.
// 3. Последний элемент массива.
// 4. Общее количество тестов.

const testCases = ["Login", "Registration", "Authorization"];

const firstElement = testCases[0];
const lastElement = testCases[testCases.length - 1];

console.log("Full array:", testCases);
console.log(`First element: ${firstElement}`);
console.log(`Last element: ${lastElement}`);
console.log(`Amount of tests: ${testCases.length}`);
