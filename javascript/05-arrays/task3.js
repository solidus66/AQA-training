// Задание 3. Status Checker
// Создай массив statusCodes:
// [200, 201, 400, 404, 500]
// Выполни следующие действия:
// 1. Проверь, содержится ли в массиве статус 200, используя includes().
// 2. Проверь, содержится ли в массиве статус 403, используя includes().
// 3. Найди индекс статуса 404 с помощью indexOf().
// 4. Найди индекс статуса 403 с помощью indexOf().
// 5. Выведи результаты всех проверок в консоль

const statusCodes = [200, 201, 400, 404, 500];

console.log(statusCodes.includes(200));
console.log(statusCodes.includes(403));
console.log(statusCodes.indexOf(404));
console.log(statusCodes.indexOf(403));
