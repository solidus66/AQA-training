// Задание 4. Execution Time Calculator
// Исходные данные:
// const testCount = 5;
// const executionTime = 3;
// Необходимо рассчитать время выполнения всех тестов.
// Требования:
// - Использовать цикл for.
// - Рассчитать суммарное время выполнения всех тестов.
// - Вывести общее количество тестов.
// - Вывести суммарное время.
// - Вывести среднее время одного теста.

const testCount = 5;
const executionTime = 3;
let totalExecutionTime = 0;

for (let testNumber = 1; testNumber <= testCount; testNumber++) {
  console.log(`Test #${testNumber}`);
  //totalExecutionTime = totalExecutionTime + executionTime;
  totalExecutionTime += executionTime;
  // console.log(totalExecutionTime);
}

console.log(`Tests in total: ${testCount}`);
console.log(`Total execution time: ${totalExecutionTime}`);
console.log(`Avg test time: ${totalExecutionTime / testCount} sec`);
