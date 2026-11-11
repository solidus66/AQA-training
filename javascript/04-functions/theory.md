# 04. Функции в JavaScript

## 1. Что такое функция

**Функция** — это блок кода, который выполняет определённую задачу. Функции позволяют разделять программу на логические части, повторно использовать код и не дублировать одну и ту же логику.

Пример:

```js
function sayHello() {
  console.log("Hello!");
}

sayHello();
```

Разберём конструкцию:

- `function` — ключевое слово для объявления функции
- `sayHello` — имя функции
- `()` — место для параметров
- `{}` — тело функции, то есть код, который она выполняет
- `sayHello()` — вызов функции

**Объявление функции и её вызов — разные действия.**

Объявление создаёт функцию, но само по себе не запускает её тело. Для выполнения функции необходимо её вызвать.

Одну функцию можно вызывать сколько угодно раз:

```js
function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
```

Результат:

```text
Hello!
Hello!
Hello!
```

---

## 2. Function Declaration

`Function Declaration` — способ объявления функции с помощью ключевого слова `function`.

```js
function greetUser() {
  console.log("Hello, user!");
}

greetUser();
```

Особенности:

- Функция объявляется непосредственно через `function`
- У функции есть имя
- Объявление функции можно разместить до или после места её вызова в пределах доступной области видимости
- Функция выполняется только при вызове

Пример:

```js
greetUser();

function greetUser() {
  console.log("Hello!");
}
```

Этот код работает. Причина — механизм hoisting, который рассматривается ниже.

---

## 3. Параметры и аргументы

Функции могут принимать входные данные. Для этого используются параметры.

```js
function greetUser(username) {
  console.log(`Hello, ${username}!`);
}

greetUser("Solidus");
greetUser("Kern");
```

**Параметр** — переменная, указанная в объявлении функции.

**Аргумент** — конкретное значение, переданное функции при вызове.

В примере:

- `username` — параметр
- `"Solidus"` и `"Kern"` — аргументы

Функция может принимать несколько параметров:

```js
function calculateSum(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

calculateSum(10, 20);
```

Результат:

```text
30
```

Порядок аргументов соответствует порядку параметров.

```js
function showUserInfo(username, age) {
  console.log(`User: ${username}, age: ${age}`);
}

showUserInfo("Solidus", 24);
```

Здесь первый аргумент передаётся в `username`, второй — в `age`.

Если при вызове не передать аргумент для параметра, его значением по умолчанию будет `undefined`, если не задано другое значение по умолчанию.

```js
function greetUser(username) {
  console.log(username);
}

greetUser();
```

Результат:

```text
undefined
```

---

## 4. Возвращаемое значение — return

`return` используется для возврата результата из функции.

Важно различать:

- `console.log()` — выводит информацию в консоль
- `return` — возвращает значение из функции вызывающему коду

Пример:

```js
function calculateSum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const result = calculateSum(10, 20);

console.log(result);
```

Результат:

```text
30
```

Что происходит:

1. Вызывается `calculateSum(10, 20)`
2. Функция получает два аргумента
3. Вычисляет их сумму
4. Возвращает результат через `return`
5. Возвращённое значение сохраняется в `result`
6. `console.log()` выводит результат

### 4.1. Функция может возвращать разные значения

В зависимости от условий функция может возвращать разные результаты.

```js
function checkStatus(statusCode) {
  if (statusCode === 200) {
    return "PASSED";
  }

  return "FAILED";
}

const result = checkStatus(404);

console.log(result);
```

Результат:

```text
FAILED
```

Функция не обязана выводить информацию в консоль. Она может только вычислить и вернуть результат.

Это позволяет использовать возвращаемое значение в других частях программы.

### 4.2. Что возвращает функция без return

Если функция завершилась без выполнения явного `return`, она возвращает `undefined`.

```js
function runTest() {
  console.log("Test started");
}

const result = runTest();

console.log(result);
```

Результат:

```text
Test started
undefined
```

Здесь:

- Первый вывод появился благодаря `console.log()` внутри функции
- `undefined` — результат вызова функции, которая не вернула другое значение

Важно: если написать `return;` без значения, функция также вернёт `undefined`.

### 4.3. return и console.log — не одно и то же

```js
function getStatus() {
  console.log("PASSED");
}

const result = getStatus();

console.log(result);
```

Функция выводит `PASSED`, но не возвращает эту строку. Поэтому `result` будет равен `undefined`.

Для сравнения:

```js
function getStatus() {
  return "PASSED";
}

const result = getStatus();

console.log(result);
```

Теперь функция действительно возвращает строку `"PASSED"`.

---

## 5. Завершение выполнения функции

Выполнение функции прекращается при достижении `return`.

Любой код после выполненного `return` в той же функции не выполняется.

```js
function checkStatus(statusCode) {
  if (statusCode === 200) {
    return "OK";
  }

  console.log("Checking failed status");

  return "FAILED";
}

console.log(checkStatus(200));
```

Результат:

```text
OK
```

`console.log("Checking failed status")` не выполнится, потому что функция уже завершилась на первом `return`.

Если ни одно условие не сработает, выполнение продолжится до следующего `return`.

**Главное правило:** `return` одновременно возвращает значение и завершает текущий вызов функции.

---

## 6. Функции и условные конструкции

Внутри функции можно использовать уже изученные конструкции JavaScript:

- `if / else if / else`
- `switch`
- циклы
- логические операторы
- другие функции

Пример проверки HTTP-статуса:

```js
function checkTestResult(statusCode) {
  if (statusCode >= 200 && statusCode < 300) {
    return "PASSED";
  } else if (statusCode >= 400) {
    return "FAILED";
  }

  return "UNKNOWN";
}

console.log(checkTestResult(200));
console.log(checkTestResult(404));
console.log(checkTestResult(302));
```

Результат:

```text
PASSED
FAILED
UNKNOWN
```

Функция может содержать несколько проверок и возвращать результат в зависимости от входных данных.

### 6.1. Несколько if вместо else if

Если каждый успешный сценарий завершается через `return`, необязательно использовать `else if`.

```js
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
```

Это работает, потому что после выполнения `return` функция завершается.

Оба варианта корректны:

- `if / else if / else` — альтернативные ветки одной условной конструкции
- Несколько `if` с `return` — последовательные независимые проверки, выполнение которых прекращается при первом успешном возврате

Выбор зависит от читаемости и структуры задачи.

---

## 7. Function Expression

`Function Expression` — способ создания функции как выражения и присваивания её переменной.

Пример:

```js
const greetUser = function (username) {
  return `Hello, ${username}!`;
};

console.log(greetUser("Solidus"));
```

Здесь:

- `const greetUser` — объявление переменной
- `function (username)` — функциональное выражение
- Функция сохраняется в переменной `greetUser`
- Вызов выполняется через `greetUser()`

В данном примере функция анонимная, потому что у неё нет собственного имени.

### 7.1. Отличие Function Declaration от Function Expression

**Function Declaration:**

```js
function greetUser() {
  return "Hello!";
}
```

**Function Expression:**

```js
const greetUser = function () {
  return "Hello!";
};
```

Основные различия:

| Function Declaration                             | Function Expression                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Объявляется через `function`                     | Создаётся как выражение                                                            |
| Имеет имя в объявлении                           | Может быть анонимной                                                               |
| Доступна до строки объявления благодаря hoisting | При использовании `const` или `let` доступна только после инициализации переменной |

---

## 8. Hoisting — всплытие объявлений

**Hoisting** — механизм JavaScript, при котором объявления обрабатываются до выполнения кода в соответствующей области видимости.

Для Function Declaration это означает, что функцию можно вызвать до её объявления.

```js
console.log(getStatus());

function getStatus() {
  return "PASSED";
}
```

Результат:

```text
PASSED
```

Function Declaration доступна до строки объявления благодаря hoisting.

Однако это не означает, что весь код функции буквально перемещается в начало файла.

### 8.1. Hoisting и Function Expression

С Function Expression ситуация другая.

```js
console.log(getStatus());

const getStatus = function () {
  return "PASSED";
};
```

Этот код вызовет `ReferenceError`.

Причина:

- Переменная `getStatus` объявлена через `const`
- До выполнения объявления она находится во временной мёртвой зоне — Temporal Dead Zone (TDZ)
- Обращаться к ней до инициализации нельзя

Важно: Function Expression не становится доступной для вызова до инициализации переменной, в которую она записана.

---

## 9. Стрелочные функции

Стрелочные функции — альтернативный синтаксис создания функций, появившийся в ES6 (ECMAScript 2015).

Для объявления используется оператор `=>`.

```js
const greetUser = (username) => {
  return `Hello, ${username}!`;
};

console.log(greetUser("Solidus"));
```

Этот пример эквивалентен Function Expression с обычной функцией.

### 9.1. Сокращённая запись

Если тело стрелочной функции состоит из одного выражения, можно опустить фигурные скобки и `return`.

```js
const calculateSum = (a, b) => a + b;
```

Это эквивалентно:

```js
const calculateSum = (a, b) => {
  return a + b;
};
```

В первом варианте используется неявный возврат значения — implicit return.

Важно: если используются фигурные скобки, `return` необходимо написать явно, если нужно вернуть значение.

```js
const calculateSum = (a, b) => {
  a + b;
};
```

Такая функция вернёт `undefined`, потому что в её теле отсутствует `return`.

### 9.2. Один параметр

Если у стрелочной функции только один параметр, круглые скобки вокруг него можно опустить.

```js
const doubleNumber = (number) => number * 2;
```

Эквивалентная запись:

```JavaScript
const doubleNumber = number => number * 2;
```

Оба варианта корректны.

### 9.3. Несколько параметров

Если параметров два или больше, круглые скобки обязательны.

```js
const calculateSum = (a, b) => a + b;
```

### 9.4. Отсутствие параметров

Если параметров нет, круглые скобки также обязательны.

```js
const sayHello = () => "Hello!";
```

### 9.5. Особенности стрелочных функций

Стрелочные функции — не просто сокращённая запись обычных функций. У них есть поведенческие отличия:

- Стрелочная функция не имеет собственного `this`
- Она не имеет собственного объекта `arguments`
- Её нельзя использовать как конструктор через `new`

Эти особенности подробнее рассматриваются при изучении объектов и контекста выполнения.

На данном этапе достаточно понимать синтаксис, параметры и правила возврата значений.

---

## 10. Область видимости — Scope

**Scope** — область программы, в которой переменная доступна.

Переменные, объявленные через `let` и `const` внутри функции, имеют локальную область видимости.

```js
function runTest() {
  const testName = "Login test";

  console.log(testName);
}

runTest();

console.log(testName);
```

Результат:

```text
Login test
ReferenceError
```

Переменная `testName` существует внутри функции `runTest()` и недоступна снаружи.

### 10.1. Локальные переменные

```js
function calculateSum() {
  const firstNumber = 10;
  const secondNumber = 20;

  return firstNumber + secondNumber;
}

const result = calculateSum();

console.log(result);
```

`firstNumber` и `secondNumber` доступны только внутри функции.

### 10.2. Глобальные переменные

Переменные, объявленные вне функций, могут быть доступны внутри них, если они находятся в доступной области видимости.

```js
const browser = "Chrome";

function getBrowser() {
  return browser;
}

console.log(getBrowser());
```

Результат:

```text
Chrome
```

Функция может обращаться к переменным из внешней области видимости.

При этом переменная, объявленная внутри функции, не становится доступной снаружи автоматически.

---

## 11. Типичные ошибки

### 1. Забыли вызвать функцию

```js
function sayHello() {
  console.log("Hello!");
}
```

Функция объявлена, но не вызвана. Поэтому сообщение не появится.

Правильно:

```js
sayHello();
```

### 2. Перепутали параметр и аргумент

```js
function greetUser(username) {
  console.log(username);
}

greetUser("Solidus");
```

`username` — параметр, `"Solidus"` — аргумент.

### 3. Использовали console.log вместо return

```js
function calculateSum(a, b) {
  console.log(a + b);
}

const result = calculateSum(10, 20);
```

В консоли появится `30`, но `result` будет равен `undefined`.

Если результат нужен вызывающему коду, используй `return`.

### 4. Забыли return

```js
function calculateSum(a, b) {
  a + b;
}
```

Функция ничего не возвращает. Результат вызова — `undefined`.

### 5. Написали код после return

```js
function getStatus() {
  return "PASSED";
  console.log("This code will not run");
}
```

Второй оператор недостижим: функция уже завершилась.

### 6. Не объявили переменную

```js
function calculateAverageTime(a, b) {
  avgTime = a / b;
  return avgTime;
}
```

Здесь `avgTime` используется без объявления через `let` или `const`.

В строгом режиме это приведёт к `ReferenceError`. В нестрогом режиме может создать нежелательную глобальную переменную.

Правильно:

```js
function calculateAverageTime(a, b) {
  const avgTime = a / b;
  return avgTime;
}
```

Или, если промежуточная переменная не нужна:

```js
function calculateAverageTime(a, b) {
  return a / b;
}
```

### 7. Забыли return в стрелочной функции

```js
const calculateSum = (a, b) => {
  a + b;
};
```

При использовании фигурных скобок нужен явный `return`.

Правильно:

```js
const calculateSum = (a, b) => {
  return a + b;
};
```

Или сокращённая запись:

```js
const calculateSum = (a, b) => a + b;
```

### 8. Обратились к локальной переменной снаружи

```js
function runTest() {
  const testName = "Login";
}

console.log(testName);
```

Переменная `testName` находится в локальной области видимости функции. Снаружи она недоступна.

---

## 12. Краткая шпаргалка

| Конструкция                    | Назначение                             |
| ------------------------------ | -------------------------------------- |
| `function name() {}`           | Function Declaration                   |
| `name()`                       | Вызов функции                          |
| `function name(param) {}`      | Функция с параметром                   |
| `name("value")`                | Передача аргумента                     |
| `return value`                 | Возврат значения и завершение функции  |
| `console.log(value)`           | Вывод значения в консоль               |
| `const name = function() {}`   | Function Expression                    |
| `const name = () => {}`        | Стрелочная функция                     |
| `() => value`                  | Стрелочная функция с неявным возвратом |
| `const` / `let` внутри функции | Локальные переменные                   |

**Главное, что нужно запомнить:**

- Функция позволяет переиспользовать код
- Параметры принимают входные данные
- Аргументы передаются при вызове
- `return` возвращает результат и завершает функцию
- `console.log()` только выводит значение в консоль
- Без явного возврата значения функция возвращает `undefined`
- Function Declaration доступна до места объявления благодаря hoisting
- Function Expression через `const` или `let` нельзя вызвать до инициализации переменной
- Стрелочные функции позволяют использовать более компактный синтаксис
- Локальные переменные доступны только в своей области видимости

---

## 13. Практические задания

### Задание 1. Test Logger

Создай функцию `logTestStart`, которая:

1. Принимает название теста через параметр `testName`.
2. Выводит в консоль сообщение `Starting test: TestName`.
3. Вызови функцию минимум два раза с разными названиями тестов.

Ожидаемый результат:

```text
Starting test: Login test
Starting test: Registration test
```

### Задание 2. Status Code Checker

Создай функцию `checkStatusCode`, которая:

1. Принимает HTTP-статус через параметр `statusCode`.
2. Если статус равен `200`, возвращает `"OK"`.
3. Если статус равен `201`, возвращает `"Created"`.
4. Если статус равен `404`, возвращает `"Not Found"`.
5. Для остальных значений возвращает `"Unknown status"`.

Вызови функцию с несколькими статусами и выведи результаты в консоль.

### Задание 3. Test Duration Calculator

Создай функцию `calculateAverageTime`, которая:

1. Принимает два параметра:
   - `totalExecutionTime` — общее время выполнения тестов.
   - `totalTests` — количество тестов.
2. Возвращает среднее время выполнения одного теста.

Вызови функцию с данными:

```js
const totalExecutionTime = 75;
const totalTests = 15;
```

Ожидаемый результат:

```text
Average test time: 5 sec
```

### Задание 4. Authorization Validator

Создай функцию `checkAuthorization`, которая принимает три параметра:

- `username`
- `password`
- `isBlocked`

Требования:

1. Если `username` или `password` пустые — вернуть `"Credentials are required"`.
2. Если `isBlocked === true` — вернуть `"User is blocked"`.
3. Если все проверки пройдены — вернуть `"Authorization successful"`.

Вызови функцию минимум три раза, чтобы проверить все три сценария.

---

## 14. Контрольные вопросы

1. Чем параметр отличается от аргумента?
2. Чем `return` отличается от `console.log()`?
3. Что произойдёт, если функция не содержит `return`?
4. Что произойдёт с выполнением функции после `return`?
5. Чем Function Declaration отличается от Function Expression?
6. Что такое стрелочная функция?
7. Что такое область видимости переменной?
