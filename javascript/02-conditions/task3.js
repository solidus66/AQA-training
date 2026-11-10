// Задание 3. Browser Selector
// Есть переменная:
// const browser = "Firefox";
// Через switch реализуй определение движка браузера:
// Браузер - Движок
// Chrome	- Chromium
// Edge	- Chromium
// Firefox - Gecko
// Safari - WebKit
// Для неизвестного браузера выводи Unsupported browser.
// Не забудь про break.

const browser = "Firefox";

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
