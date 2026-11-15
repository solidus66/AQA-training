// Задание 3. API Response
// Создай объект apiResponse со следующей структурой:
// - statusCode: 200
// - data:
//   - userId: 15
//   - name: "Alex"
//   - isActive: true
// Выведи в консоль:
// 1. HTTP-статус ответа.
// 2. ID пользователя.
// 3. Имя пользователя.
// 4. Активен ли пользователь.

const apiResponse = {
  statusCode: 200,
  data: {
    userId: 15,
    name: "Alex",
    isActive: true,
  },
};

console.log(`HTTP status: ${apiResponse.statusCode}`);
console.log(`User ID: ${apiResponse.data.userId}`);
console.log(`User name: ${apiResponse.data.name}`);
console.log(`Is user active: ${apiResponse.data.isActive}`);
