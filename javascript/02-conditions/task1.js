// Задание 1. HTTP Status Checker
// Создай переменную statusCode со значением 404.
// Напиши условия:
// 1. Если статус 200 — вывести OK.
// 2. Если статус 201 — вывести Created.
// 3. Если статус 400 — вывести Bad Request.
// 4. Если статус 404 — вывести Not Found.
// 5. Для всех остальных — вывести Unknown status.
// Используй if / else if / else

const statusCode = 404;

if (statusCode === 200) {
  console.log("OK");
} else if (statusCode === 201) {
  console.log("Created");
} else if (statusCode === 400) {
  console.log("Bad Request");
} else if (statusCode === 404) {
  console.log("Not Found");
} else {
  console.log("Unknown status");
}
