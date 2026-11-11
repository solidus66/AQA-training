// Задание 3. Retry Mechanism
// Исходные данные:
// let attempt = 1;
// const maxAttempts = 5;
// const successfulAttempt = 3;
// Необходимо реализовать механизм повторного выполнения теста.
// Требования:
// 1. Использовать цикл while.
// 2. На каждой итерации выводить Attempt N.
// 3. Если номер текущей попытки совпадает с successfulAttempt:
//    - Вывести Test passed.
//    - Прекратить цикл через break.
// 4. Если все пять попыток завершились без успеха:
//    - Вывести Test failed после завершения цикла.
// Дополнительная проверка: попробуй изменить successfulAttempt на 6. Тогда цикл должен выполнить все пять попыток и вывести Test failed.
// Теперь обе ветки имеют смысл, а break и проверка завершения цикла работают не для декорации.

let attempt = 1;
const maxAttempts = 5;
const successfulAttempt = 3;

while (attempt <= maxAttempts) {
  console.log(`Attempt ${attempt}`);

  if (attempt === successfulAttempt) {
    console.log("Test passed");
    break;
  }
  attempt++;
}

if (attempt > maxAttempts) {
  console.log("Test failed");
}
