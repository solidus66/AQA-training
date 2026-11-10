// Задание 1. Информация о тестовом окружении
// Объяви переменные:
// - browserName — название браузера ("Chrome")
// - browserVersion — версия браузера (157)
// - operatingSystem — ОС ("Windows")
// - isHeadless — запущен ли браузер в headless-режиме (false)
// Выведи каждую переменную в консоль и отдельно выведи её тип через typeof

const browserName = "Chrome";
const browserVersion = 157;
const operatingSystem = "Windows";
const isHeadless = false;

console.log(`Browser: ${browserName}`);
console.log(typeof browserName);

console.log(`Version: ${browserVersion}`);
console.log(typeof browserVersion);

console.log(`OS: ${operatingSystem}`);
console.log(typeof operatingSystem);

console.log(`isHeadless: ${isHeadless}`);
console.log(typeof isHeadless);
