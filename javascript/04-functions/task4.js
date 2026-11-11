// Задание 4. Authorization Validator
// Создай функцию checkAuthorization, которая принимает три параметра:
// - username
// - password
// - isBlocked
// Требования:
// 1. Если username или password пустые — вернуть "Credentials are required".
// 2. Если isBlocked === true — вернуть "User is blocked".
// 3. Если все проверки пройдены — вернуть "Authorization successful".
// Вызови функцию минимум три раза, чтобы проверить все три сценария.

function checkAuthorization(username, password, isBlocked) {
  if (!username || !password) {
    return "Credentials are required";
  } else if (isBlocked === true) {
    return "User is blocked";
  } else {
    return "Authorization successful";
  }
}

console.log(checkAuthorization("", "qwerty", false));
console.log(checkAuthorization("solidus", "", false));
console.log(checkAuthorization("solidus", "qwerty", true));
console.log(checkAuthorization("solidus", "qwerty", false));
