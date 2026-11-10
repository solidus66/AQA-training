// Задание 2. Проверка HTTP-ответа
// Есть данные:
// const actualStatus = 200;
// const expectedStatus = 200;
// Напиши выражения, которые проверяют:
// 1. Совпадает ли фактический статус с ожидаемым.
// 2. Отличается ли фактический статус от 500.
// 3. Является ли статус успешным (от 200 до 299 включительно).
// 4. Является ли статус строго равным строке "200".
// Каждый результат выведи в консоль.

const actualStatus = 200;
const expectedStatus = 200;

console.log(actualStatus === expectedStatus);
console.log(actualStatus !== 500);
console.log(actualStatus >= 200 && actualStatus <= 299);
console.log(actualStatus === "200");
