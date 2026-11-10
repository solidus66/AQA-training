// Задание 4. Authorization Check
// Есть переменные:
// const username = "solidus";
// const password = "123456";
// const isBlocked = false;
// Реализуй проверку авторизации:
// 1. Если логин или пароль пустые — Credentials are required.
// 2. Если пользователь заблокирован — User is blocked.
// 3. Если всё в порядке — Authorization successful.
// Дополнительно:
// - Используй тернарный оператор для определения значения переменной authStatus: "AUTHORIZED" или "UNAUTHORIZED".
// - Выведи результат в консоль.

const username = "solidus";
const password = "123456";
const isBlocked = false;

const authStatus =
  username && password && !isBlocked ? "AUTHORIZED" : "UNAUTHORIZED";
console.log(authStatus);

if (!username || !password) {
  console.log("Credentials are required");
} else if (isBlocked) {
  console.log("User is blocked");
} else {
  console.log("Authorization successful");
}
