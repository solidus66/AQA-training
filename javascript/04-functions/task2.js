// Задание 2. Status Code Checker
// Создай функцию checkStatusCode, которая:
// 1. Принимает HTTP-статус через параметр statusCode.
// 2. Если статус равен 200, возвращает "OK".
// 3. Если статус равен 201, возвращает "Created".
// 4. Если статус равен 404, возвращает "Not Found".
// 5. Для остальных значений возвращает "Unknown status".
// Вызови функцию с несколькими статусами и выведи результаты в консоль.

function checkStatusCode(statusCode) {
  if (statusCode === 200) {
    return "OK";
  }

  if (statusCode === 201) {
    return "Created";
  }

  if (statusCode === 404) {
    return "Not Found";
  }

  return "Unknown status";
}

console.log(checkStatusCode(200));
console.log(checkStatusCode(201));
console.log(checkStatusCode(404));
console.log(checkStatusCode(400));
console.log(checkStatusCode("200"));
