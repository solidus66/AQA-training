# 02. JavaScript — Условия и ветвление

## 1. Условные конструкции `if / else if / else`

Условные конструкции позволяют выполнять разные участки кода в зависимости от выполнения определённых условий.

### 1.1. `if`

Выполняет код, если условие истинно.

```js
const statusCode = 200;

if (statusCode === 200) {
  console.log("Request successful");
}
```

Если условие `statusCode === 200` возвращает `true`, выполняется код внутри фигурных скобок.

Если условие возвращает `false`, блок `if` пропускается.

### 1.2. `else`

Используется для выполнения альтернативного кода, если условие `if` оказалось ложным.

```js
const statusCode = 404;

if (statusCode === 200) {
  console.log("Request successful");
} else {
  console.log("Request failed");
}
```

Выполняется только одна из двух веток: `if` или `else`.

### 1.3. `else if`

Используется, когда необходимо проверить несколько альтернативных условий.

```js
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
```

JavaScript проверяет условия сверху вниз.

Как только найдено первое истинное условие, выполняется его блок, а остальные ветки пропускаются.

`else` необязателен. Его используют для обработки всех оставшихся случаев.

### 1.4. Разница между несколькими `if` и `else if`

Несколько независимых `if` проверяются отдельно друг от друга:

```js
const value = 10;

if (value > 0) {
  console.log("Positive");
}

if (value < 20) {
  console.log("Less than 20");
}
```

Результат:

```text
Positive
Less than 20
```

Оба условия истинны, поэтому выполняются оба блока.

В цепочке `if / else if / else` выполняется только первая подходящая ветка:

```js
const value = 10;

if (value > 0) {
  console.log("Positive");
} else if (value < 20) {
  console.log("Less than 20");
}
```

Результат:

```text
Positive
```

Второе условие даже не проверяется.

**Когда использовать:**

- Независимые `if` — когда несколько условий могут выполняться одновременно.
- `if / else if / else` — когда нужно выбрать один из взаимоисключающих сценариев.

---

## 2. Конструкция `switch`

`switch` — конструкция ветвления, которая позволяет сравнить одно значение с несколькими конкретными вариантами.

Удобна, когда есть много возможных значений одной переменной.

### 2.1. Синтаксис

```js
switch (expression) {
  case value1:
    // Код для первого варианта
    break;

  case value2:
    // Код для второго варианта
    break;

  default:
  // Код, если совпадений нет
}
```

Основные элементы:

- `switch` — начало конструкции.
- `expression` — значение, которое необходимо проверить.
- `case` — конкретный вариант значения.
- `break` — завершает выполнение конструкции `switch`.
- `default` — выполняется, если ни один `case` не подошёл.

### 2.2. Пример использования

```js
const statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("OK");
    break;

  case 201:
    console.log("Created");
    break;

  case 400:
    console.log("Bad Request");
    break;

  case 404:
    console.log("Not Found");
    break;

  default:
    console.log("Unknown status");
}
```

JavaScript последовательно ищет совпадение между значением `statusCode` и значениями в `case`.

При `statusCode = 404` будет выполнен соответствующий блок.

### 2.3. Зачем нужен `break`

`break` завершает выполнение `switch` после выполнения подходящего блока.

Если убрать `break`, JavaScript продолжит выполнять следующие инструкции после найденного `case`, даже если их условия не совпадают.

Это поведение называется **fall-through**.

Пример:

```js
const statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("OK");

  case 201:
    console.log("Created");

  case 404:
    console.log("Not Found");

  default:
    console.log("Unknown status");
}
```

Результат:

```text
Not Found
Unknown status
```

После совпадения с `case 404` выполнение продолжается до конца `switch`.

В обычных сценариях отсутствие `break` чаще всего является ошибкой.

### 2.4. Объединение нескольких `case`

Если несколько вариантов должны выполнять один и тот же код, их можно объединить.

```js
const browser = "Edge";

switch (browser) {
  case "Chrome":
  case "Edge":
    console.log("Chromium");
    break;

  case "Firefox":
    console.log("Gecko");
    break;

  case "Safari":
    console.log("WebKit");
    break;

  default:
    console.log("Unsupported browser");
}
```

Здесь `Chrome` и `Edge` ведут к одному блоку.

Отсутствие `break` между ними намеренное: таким образом оба варианта попадают в общий блок.

### 2.5. Строгое сравнение в `switch`

`switch` сравнивает значения по принципу строгого равенства (`===`).

```js
const statusCode = "200";

switch (statusCode) {
  case 200:
    console.log("OK");
    break;

  default:
    console.log("Unknown status");
}
```

Результат:

```text
Unknown status
```

Причина:

- `"200"` — строка (`string`).
- `200` — число (`number`).

Значения имеют разные типы, поэтому совпадения нет.

**Когда использовать `switch`:**

- Выбор действия в зависимости от HTTP-статуса.
- Определение браузера или браузерного движка.
- Обработка типов ошибок.
- Выбор сценария выполнения теста.

`switch` удобен для сравнения одного значения с несколькими конкретными вариантами. Для сложных логических условий обычно лучше подходит `if / else`.

---

## 3. Truthy и Falsy

Truthy и Falsy — официальные термины JavaScript, а не разговорные обозначения.

Они описывают, во что преобразуется значение при использовании в логическом контексте.

- **Truthy** — значение, которое при преобразовании в Boolean становится `true`.
- **Falsy** — значение, которое при преобразовании в Boolean становится `false`.

В JavaScript условие `if` может принимать не только `true` и `false`, но и значения других типов.

Например:

```js
const username = "solidus";

if (username) {
  console.log("Username exists");
}
```

Здесь нет явного сравнения с `true`.

JavaScript автоматически преобразует значение `username` в Boolean.

Поскольку `"solidus"` — непустая строка, она является Truthy. Поэтому выполняется блок `if`.

### 3.1. Falsy-значения

В JavaScript к Falsy относятся следующие значения:

| Значение | Описание                                             |
| ---------------- | ------------------------------------------------------------ |
| `false`        | Логическое false                                   |
| `0`            | Числовой ноль                                    |
| `-0`           | Отрицательный ноль                          |
| `0n`           | BigInt-ноль                                              |
| `""`           | Пустая строка                                    |
| `null`         | Отсутствие значения                        |
| `undefined`    | Значение не определено                   |
| `NaN`          | Некорректный числовой результат |

Примеры:

```js
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

Если передать такое значение в `if`, условие не выполнится:

```js
const username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username is empty");
}
```

Результат:

```text
Username is empty
```

### 3.2. Truthy-значения

Практически все остальные значения в JavaScript являются Truthy.

Примеры:

| Значение  | Boolean  |
| ----------------- | -------- |
| `"hello"`       | `true` |
| `"0"`           | `true` |
| `"false"`       | `true` |
| `" "`           | `true` |
| `1`             | `true` |
| `-1`            | `true` |
| `[]`            | `true` |
| `{}`            | `true` |
| `function() {}` | `true` |

Несколько важных нюансов:

**Строка `"false"` — Truthy.**

```js
Boolean("false"); // true
```

Это непустая строка. JavaScript не анализирует её содержимое и не пытается определить, что написано внутри.

**Строка `"0"` — Truthy.**

```js
Boolean("0"); // true
Boolean(0); // false
```

Строка `"0"` и число `0` — разные значения.

**Пустой массив и пустой объект — Truthy.**

```js
Boolean([]); // true
Boolean({}); // true
```

В отличие от некоторых других языков программирования, в JavaScript пустые массивы и объекты не считаются Falsy.

### 3.3. Проверка Truthy/Falsy через `Boolean()`

Функция `Boolean()` преобразует переданное значение в логический тип.

```js
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

console.log(Boolean(100)); // true
console.log(Boolean(0)); // false

console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

Это удобно для проверки поведения неизвестных значений.

При этом вручную вызывать `Boolean()` внутри каждого `if` обычно не требуется: JavaScript выполняет преобразование автоматически.

---

## 4. Практическое использование Truthy/Falsy

### 4.1. Проверка наличия логина

```js
const username = "solidus";

if (username) {
  console.log("Username provided");
} else {
  console.log("Username is missing");
}
```

Если `username` — пустая строка, условие будет Falsy.

Если строка содержит символы, условие будет Truthy.

**Важный нюанс: пробелы тоже считаются символами.**

```js
const username = "   ";

Boolean(username); // true
```

Если необходимо проверить, что строка не пустая и не состоит только из пробелов, используют `.trim()`:

```js
if (username.trim()) {
  console.log("Username provided");
} else {
  console.log("Username is missing");
}
```

`.trim()` удаляет пробелы в начале и конце строки.

### 4.2. Проверка наличия элементов в массиве

```js
const elements = [];

if (elements) {
  console.log("Elements found");
} else {
  console.log("No elements found");
}
```

Несмотря на то что массив пустой, результатом будет:

```text
Elements found
```

Причина: пустой массив — Truthy.

Чтобы проверить наличие элементов, необходимо проверять свойство `.length`:

```js
if (elements.length) {
  console.log("Elements found");
} else {
  console.log("No elements found");
}
```

У пустого массива `length` равно `0`, а ноль — Falsy.

Для AQA это особенно актуально при проверке количества найденных элементов на странице.

### 4.3. Проверка данных API

```js
const response = {
  status: 200,
  data: null,
};

if (response.data) {
  console.log("Response contains data");
} else {
  console.log("Response data is empty");
}
```

Поскольку `data` равно `null`, условие не выполнится.

Однако такая проверка объединяет разные случаи:

- `null`
- `undefined`
- `0`
- `false`
- `""`

Если необходимо проверить именно отсутствие `null` и `undefined`, лучше использовать явную проверку:

```js
if (response.data !== null && response.data !== undefined) {
  console.log("Data exists");
}
```

Это важно: проверка Truthy/Falsy не всегда равнозначна проверке существования значения.

---

## 5. Логические операторы

Логические операторы позволяют объединять и инвертировать условия.

### 5.1. `&&` — логическое И

Оператор `&&` означает, что должны выполняться оба условия.

```js
const username = "solidus";
const password = "123456";

if (username && password) {
  console.log("Credentials provided");
}
```

Условие истинно, только если оба значения Truthy.

Таблица результатов:

| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

Пример:

```js
const username = "solidus";
const password = "";

console.log(Boolean(username && password)); // false
```

Логин заполнен, пароль пустой. Следовательно, проверка не пройдена.

### 5.2. `||` — логическое ИЛИ

Оператор `||` означает, что достаточно выполнения хотя бы одного условия.

```js
const username = "";
const password = "123456";

if (!username || !password) {
  console.log("Credentials are required");
}
```

Условие истинно, если хотя бы одно из двух значений Falsy.

Таблица результатов:

| A     | B     | A \|\| B |
| ----- | ----- | -------- |
| true  | true  | true     |
| true  | false | true     |
| false | true  | true     |
| false | false | false    |

Разница между проверками:

```js
username && password;
```

Оба значения должны быть заполнены.

```js
!username || !password;
```

Хотя бы одно значение должно отсутствовать.

### 5.3. `!` — логическое НЕ

Оператор `!` инвертирует логическое значение.

```js
const isBlocked = false;

console.log(!isBlocked); // true
```

Если значение Truthy, после `!` оно становится `false`.

Если значение Falsy, после `!` оно становится `true`.

Примеры:

```js
console.log(!true); // false
console.log(!false); // true

console.log(!"hello"); // false
console.log(!""); // true

console.log(!0); // true
console.log(!1); // false
```

Двойное отрицание `!!` преобразует значение в Boolean:

```js
console.log(!!"hello"); // true
console.log(!!""); // false
```

### 5.4. Короткое замыкание (Short-circuit evaluation)

Логические операторы `&&` и `||` используют короткое замыкание.

Это означает, что JavaScript может не вычислять правую часть выражения, если результат уже известен.

Для `&&`:

```js
const username = "";

const result = username && username.length;

console.log(result); // ""
```

Поскольку `username` — Falsy, JavaScript не выполняет правую часть выражения.

Для `||`:

```js
const username = "solidus";

const result = username || "Guest";

console.log(result); // "solidus"
```

Поскольку левая часть Truthy, правая часть не вычисляется.

**Важный нюанс:** в JavaScript операторы `&&` и `||` возвращают не обязательно `true` или `false`, а одно из исходных значений.

Например:

```js
console.log("hello" && "world"); // "world"
console.log("" || "Guest"); // "Guest"
```

Если нужно получить именно Boolean, можно использовать `Boolean()` или двойное отрицание `!!`.

---

## 6. Тернарный оператор

Тернарный оператор — короткая форма записи простого `if / else`.

Используется, когда в зависимости от условия необходимо выбрать одно из двух значений.

### 6.1. Синтаксис

```js
condition ? valueIfTrue : valueIfFalse;
```

- `condition` — проверяемое условие.
- `?` — разделяет условие и результат при `true`.
- `:` — разделяет результаты для `true` и `false`.

Пример:

```js
const statusCode = 200;

const result = statusCode === 200 ? "PASSED" : "FAILED";

console.log(result);
```

Результат:

```text
PASSED
```

### 6.2. Тернарный оператор с несколькими условиями

В тернарном операторе можно использовать логические операторы и объединять несколько условий.

```js
const username = "solidus";
const password = "123456";
const isBlocked = false;

const authStatus =
  username && password && !isBlocked ? "AUTHORIZED" : "UNAUTHORIZED";
```

Для получения `AUTHORIZED` должны одновременно выполняться все условия:

1. Логин заполнен.
2. Пароль заполнен.
3. Пользователь не заблокирован.

Если хотя бы одно условие не выполняется, результатом будет `UNAUTHORIZED`.

### 6.3. Когда использовать тернарный оператор

Подходит для простого выбора одного из двух значений:

```js
const isPassed = true;

const result = isPassed ? "PASSED" : "FAILED";
```

Не стоит использовать его для сложных многоуровневых проверок. В таких случаях `if / else` читается значительно лучше.

---

## 7. Практический пример: проверка авторизации

Объединим изученные конструкции в одном примере.

```js
const username = "solidus";
const password = "123456";
const isBlocked = false;

const authStatus =
  username && password && !isBlocked ? "AUTHORIZED" : "UNAUTHORIZED";

if (!username || !password) {
  console.log("Credentials are required");
} else if (isBlocked) {
  console.log("User is blocked");
} else {
  console.log("Authorization successful");
}
```

### Как работает логика

**Шаг 1. Проверка credentials**

```js
if (!username || !password)
```

Если логин или пароль пустые, выводится сообщение:

```text
Credentials are required
```

Остальные проверки пропускаются.

**Шаг 2. Проверка блокировки**

```js
else if (isBlocked)
```

Если credentials заполнены, но пользователь заблокирован:

```text
User is blocked
```

**Шаг 3. Успешная авторизация**

```js
else
```

Если предыдущие проверки не сработали:

```text
Authorization successful
```

### Проверка сценариев

| Логин       | Пароль     | isBlocked | Результат       |
| ---------------- | ---------------- | --------- | ------------------------ |
| Заполнен | Заполнен | false     | Authorization successful |
| Пустой     | Заполнен | false     | Credentials are required |
| Заполнен | Пустой     | false     | Credentials are required |
| Заполнен | Заполнен | true      | User is blocked          |
| Пустой     | Заполнен | true      | Credentials are required |

### Важное замечание

В примере `authStatus` вычисляется отдельно от сообщений, выводимых через `if / else if / else`.

Это сделано специально для демонстрации тернарного оператора и условных конструкций в рамках учебного задания.

В реальном проекте не стоит вычислять один и тот же результат несколькими независимыми способами, если это не требуется логикой приложения.

---

## 8. Типичные ошибки

### Ошибка 1. Использование `==` вместо `===`

```js
if (statusCode == 200) {
  console.log("OK");
}
```

`==` сравнивает значения с приведением типов.

```js
200 == "200"; // true
200 === "200"; // false
```

Для предсказуемых проверок в автотестах предпочтительнее использовать `===` и `!==`.

### Ошибка 2. Путаница между строкой и числом

```js
const statusCode = "200";

if (statusCode === 200) {
  console.log("OK");
}
```

Условие не выполнится, потому что типы различаются.

### Ошибка 3. Проверка пустого массива

```js
const elements = [];

if (elements) {
  console.log("Elements found");
}
```

Условие выполнится, потому что пустой массив Truthy.

Для проверки количества элементов нужно использовать `elements.length`.

### Ошибка 4. Использование `||` вместо `&&`

```js
const username = "solidus";
const password = "";

if (username || password) {
  console.log("Credentials provided");
}
```

Условие выполнится, хотя пароль пустой.

Если оба значения должны быть заполнены, нужен `&&`.

### Ошибка 5. Отсутствие `break` в `switch`

Без `break` выполнение может продолжиться в следующих блоках `case`.

### Ошибка 6. Проверка Truthy вместо конкретного значения

```js
const responseData = 0;

if (responseData) {
  console.log("Data exists");
}
```

Блок не выполнится, хотя значение `0` действительно присутствует.

Если важно отличать отсутствие значения от допустимого нуля, используй явную проверку.

---

## 9. Краткая шпаргалка

| Конструкция | Назначение                                                          |
| ---------------------- | ----------------------------------------------------------------------------- |
| `if`                 | Проверка условия                                               |
| `else if`            | Проверка альтернативного условия                |
| `else`               | Запасная ветка                                                   |
| `switch`             | Выбор одного из нескольких вариантов          |
| `case`               | Конкретный вариант в `switch`                             |
| `break`              | Завершение `switch` или цикла                             |
| `default`            | Ветка по умолчанию в `switch`                              |
| `&&`                 | И — все условия должны быть истинными          |
| `\|\|`                 | ИЛИ — достаточно одного истинного условия |
| `!`                  | НЕ — инвертирует логическое значение          |
| `Boolean()`          | Преобразует значение в Boolean                            |
| `? :`                | Тернарный оператор                                           |
| Truthy                 | Значение преобразуется в `true`                       |
| Falsy                  | Значение преобразуется в `false`                      |

### Главное, что нужно запомнить

1. `if / else if / else` — выбор между условиями.
2. `switch` — выбор между конкретными значениями.
3. `break` останавливает выполнение `switch`.
4. Truthy/Falsy — автоматическое преобразование значений в Boolean в логическом контексте.
5. Пустые строки, ноль, `null`, `undefined` и `NaN` — Falsy.
6. Пустые массивы и объекты — Truthy.
7. `&&` требует выполнения всех условий, `||` — хотя бы одного.
8. `!` инвертирует логическое значение.
9. Тернарный оператор позволяет компактно выбрать одно из двух значений.
10. Проверка существования значения и проверка его содержимого — не одно и то же.

---

## 10. Практические задания

Решения каждого задания хранятся в отдельном JavaScript-файле. Не добавляй решения в этот README.

### Задание 1. HTTP Status Checker

**Файл:** `task1.js`

Создай переменную `statusCode` со значением `404`.

Напиши условия с использованием `if / else if / else`:

1. Если статус `200` — вывести `OK`.
2. Если статус `201` — вывести `Created`.
3. Если статус `400` — вывести `Bad Request`.
4. Если статус `404` — вывести `Not Found`.
5. Для всех остальных статусов — вывести `Unknown status`.

**Требования:**

- Использовать `if / else if / else`.
- Для сравнений использовать `===`.
- Проверить, что неизвестные статусы обрабатываются через `else`.

### Задание 2. Test Result

**Файл:** `task2.js`

Исходные данные:

```js
const testName = "Login test";
const isPassed = true;
const duration = 4.5;
```

Необходимо реализовать проверку результата теста:

1. Если `isPassed` равен `true`, вывести `PASSED`.
2. Если `isPassed` равен `false`, вывести `FAILED`.
3. Если тест пройден и выполнялся меньше 5 секунд — дополнительно вывести `FAST TEST`.
4. Если тест не пройден — вывести `TEST NEEDS INVESTIGATION`.

**Требования:**

- Использовать `if / else`.
- Использовать вложенное условие для проверки продолжительности успешного теста.
- Использовать логические операторы там, где это необходимо.
- `FAST TEST` не должен выводиться для проваленного теста.

### Задание 3. Browser Selector

**Файл:** `task3.js`

Исходные данные:

```js
const browser = "Firefox";
```

Через `switch` реализуй определение движка браузера:

| Браузер | Движок |
| -------------- | ------------ |
| Chrome         | Chromium     |
| Edge           | Chromium     |
| Firefox        | Gecko        |
| Safari         | WebKit       |

Для неизвестного браузера выводи `Unsupported browser`.

**Требования:**

- Использовать `switch / case`.
- Не забывать про `break`.
- Использовать `default` для неизвестных браузеров.
- Допускается объединить `Chrome` и `Edge` в один блок.

### Задание 4. Authorization Check

**Файл:** `task4.js`

Исходные данные:

```js
const username = "solidus";
const password = "123456";
const isBlocked = false;
```

Необходимо реализовать проверку авторизации:

1. Если логин или пароль пустые — вывести `Credentials are required`.
2. Если пользователь заблокирован — вывести `User is blocked`.
3. Если всё в порядке — вывести `Authorization successful`.

Дополнительно:

- Используй тернарный оператор для определения значения переменной `authStatus`.
- Если авторизация успешна, `authStatus` должен быть `"AUTHORIZED"`.
- Во всех остальных случаях — `"UNAUTHORIZED"`.
- Выведи значение `authStatus` в консоль.

**Требования:**

- Использовать Truthy/Falsy.
- Использовать `&&`, `||` и `!`.
- Использовать тернарный оператор.
- Использовать одну цепочку `if / else if / else`.
- Проверка credentials должна выполняться раньше проверки блокировки.

### Контрольные вопросы

1. В чём разница между `else if` и несколькими независимыми `if`?
2. Что произойдёт, если забыть `break` в `switch`?
3. Почему `Boolean("false")` возвращает `true`?
4. Какие из значений `0`, `"0"`, `[]`, `null`, `{}` являются Falsy?
5. Чем тернарный оператор отличается от `if / else`?
6. В чём разница между `username && password` и `!username || !password`?
7. Почему проверка `if (array)` не подходит для определения наличия элементов в массиве?
8. Чем проверка `if (response.data)` отличается от `response.data !== null`?
