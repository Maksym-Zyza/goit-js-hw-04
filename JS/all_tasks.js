// console.log("Task 1-1 \n");
// // =====================================================
// const name = "Генератор защитного поля";
// let prise = 1000;
// prise = 2000;
// console.log(`Выбран ${name}, цена за штуку ${prise} кредитов`);

// console.log("Task 1-2 \n");
// // =====================================================

// const total = 100;
// const ordered = 150;

// if (total > ordered) {
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер.");
// }

// console.log("Task 1-3 \n");
// // =====================================================

// const ADMIN_PASSWORD = prompt("Добро пожаловать, введите пароль");
// let message;

// if (ADMIN_PASSWORD === null) {
//   message = "Отменено пользователем!";
// } else if (ADMIN_PASSWORD === "jqueryismyjam") {
//   message = "Добро пожаловать!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }
// alert(message);

// console.log("Task 1-4 \n");
// =====================================================
// const credits = 23580;
// const pricePerDroid = 3000;
// const quantityDroid = prompt("Добрий день сколькои дроидов Ви хотите купить?");
// let totalPrice = credits - pricePerDroid * quantityDroid;
// let message;
// if (quantityDroid > 0) {
//   message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${totalPrice} кредитов.`;
// } else if (quantityDroid > credits) {
//   message = "Недостаточно средств на счету!";
// } else {
//   message = "Некорректное введение. Отменено пользователем!";
// }
// alert(message);

// console.log("Task 1-5 \n");
// =====================================================

// let country = prompt("Укажите страну доставки товара");
// country = country.toLowerCase();
// let price;

// switch (country) {
//   case "китай":
//     price = 100;
//     break;
//   case "чили":
//     price = 250;
//     break;
//   case "австралия":
//     price = 170;
//     break;
//   case "индия":
//     price = 80;
//     break;
//   case "ямайка":
//     price = 120;
//     break;
//   default:
//     alert(`В вашей стране доставка не доступна`);
// }

// if (typeof price === "undefined") {
//   console.log(`В вашей стране доставка не доступна`);
// } else {
//   country = country[0].toUpperCase() + country.slice(1);
//   console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
// }

// console.log("Task 1-6 \n");
// =====================================================

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// for (let input = 0; input !== null; input += 0) {
//     input = prompt("Введите чило");
//     if (input === null) {
//         console.log(`Выход`);
//         break;
//     } else if (isNaN(input)) {
//         alert("Было введено не число, попробуйте еще раз");
//     } else {
//         console.log(`Начальное значение: ${total}`);
//         total += Number(input);
//         console.log(`Введенное число: ${input}`);
//         console.log(`Сумма: ${total}`);
//     }
// }
// alert(`Общая сумма чисел равна ${total}`);

// Задача 2-1
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате[номер элемента]-[значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - `, array[i]);
//   }
// };

// Задача 2-1/2
// // Вызовы функции для проверки работоспособности реализации
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const getItemsString = function (array) {
//   const result1 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     let result = `${i + 1} - ${array[i]}\n`;
//     // result.split(" ").join(" ");
//     result1.push(result);
//   }
//   return `'${result1.join(" ")}'`;
// };
// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// Вызовы функции для проверки работоспособности реализации
// getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// getItemsString([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Задача 2-1/3
// const getItemsString = function (array) {
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//     // result.split(" ").join(" ");
//   }
//   return result;
// };
// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// // Вызовы функции для проверки работоспособности реализации
// // getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// // getItemsString([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Задача 2-2
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   console.log(`Цена за слово:`, pricePerWord);
//   const words = message.split(" ");

//   pricePerWord = words.length * pricePerWord;
//   const slug = words.join(" ");

//   console.log(`Строка:`, slug, `-`, words.length);
//   return `Цена гравировки всех слов в строке: ${pricePerWord}`;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// Задача 2-2/2
// const calculateEngravingPrice = function (message = "", pricePerWord = 0) {
//   console.log(pricePerWord);
//   const words = message.split(" ");

//   pricePerWord = words.length * pricePerWord;
//   const slug = words.join(" ");

//   console.log(words.length);
//   return pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// Задача 2-3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   const words = string.split(" ");
//   let maxLongWord = words[0];

//   for (const word of words) {
//     if (word.length > maxLongWord.length) {
//       maxLongWord = word;
//     }
//   }
//   return maxLongWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// Задача 2-4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   const lengthString = string.split("");
//   let newString = "";

//   newString = lengthString.slice(0, 40).join("");
//   //   console.log(lengthString.length);

//   if (lengthString.length > 40) {
//     newString = `${string.slice(0, 40)}...`;
//   }

//   return newString;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка

// Задача 2-4/2
// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   const lengthString = string.split("");
//   let newString = "";

//   newString = lengthString.slice(0, maxLength).join("");
//   //   console.log(lengthString.length);

//   if (lengthString.length > maxLength) {
//     newString = `${string.slice(0, maxLength)}...`;
//   }

//   return newString;
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// // 'Vestibulum facilisis, purus ne...'

// Задача 2-5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   const banWords = ["spam", "sale"];
//   let inform = false;

//   for (const element of banWords) {
//     if (message.toLowerCase().includes(element)) {
//       inform = true;
//     }
//   }
//   return inform;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Задача 2-6

// function mapArray(array) {
//   "use strict";
//   const numbers = [new Array(array.length)];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers.push(array[i] * 10);
//   }
//   console.log(numbers.splice(0, 3));
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// Задача 2-7
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются.По завершению проверки массива array возвращается массив numbers.

// function filterArray(array) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, "100"]));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// Задача 2-8
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.Для подсчета суммы используй переменную total.Функция должна возвращать 0 если массив пустой и значение total в противном случае.

// function reduceArray(array) {
//   "use strict";
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }

//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// Задача 2-9
// Есть массив logins с логинами пользователей.Напиши скрипт добавления логина в массив logins.Добавляемый логин должен:
// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.
// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.
// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.
// Напиши функцию addLogin(allLogins, login) которая:
// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.
// Предикатные функции возвращают только true или false.Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// function isLoginValid(login, min = 4, max = 16) {
//   for (let i = 0; i < login.length; i += 1) {
//     return min <= login.length && login.length <= max ? true : false;
//   }
// }
// // console.log(isLoginValid(["Mango", "robotGoogles", "Ploy"]));
// // console.log(isLoginUnique(["Mango", "robotGoogles", "Ploy"], "Mango"));

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   //   console.log(login);
//   return allLogins.includes(login) ? false : true;
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   console.log(login);
//   console.log(allLogins);
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) !== true) {
//     message = REFUSAL;
//   } else if (
//     isLoginValid(login) === true &&
//     isLoginUnique(allLogins, login) !== false
//   ) {
//     message = SUCCESS;
//     logins.push(login);
//   }
//   return message;
// }
// // }
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// //("Логин успешно добавлен!");

// console.log(addLogin(logins, "robotGoogles"));
// //("Такой логин уже используется!");

// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// Задача 2-10 (Задание 6)
// Напиши скрипт со следующим функционалом:
// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// for (let input = 0; input !== null; input += 0) {
//   input = prompt("Введите чило");
//   numbers.push(input);
//   console.log(numbers);

//   if (input === null) {
//     console.log(`Выход`);
//     break;
//   } else if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     console.log(`Начальное значение: ${total}`);
//     // total += Number(input);

//     let element = 0;
//     for (const number of numbers) {
//       element = Number(number);
//     }
//     total += Number(element);

//     console.log(`Введенное число: ${input}`);
//     console.log(`Сумма: ${total}`);
//   }
// }
// alert(`Общая сумма чисел равна ${total}`);

// Задача 2-11 (Задание 7)
// (дополнительное, выполнять не обязательно)
// Есть массив logins с логинами пользователей.Напиши скрипт добавления логина в массив logins.Добавляемый логин должен:
// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.
// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.
// Напиши функцию addLogin(allLogins, login) которая:
// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.
// Предикатные функции возвращают только true или false.Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//     // твой код
// };

// const isLoginUnique = function (allLogins, login) {
//     // твой код
// };

// const addLogin = function (allLogins, login) {
//     // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast'))

/////
// Задача 2-9
// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   return min <= login.length && login.length <= max ? true : false;
// }
// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   return allLogins.includes(login) ? false : true;
// }
// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) !== true) {
//     message = REFUSAL;
//   } else if (
//     isLoginValid(login) === true &&
//     isLoginUnique(allLogins, login) !== false
//   ) {
//     message = SUCCESS;
//     allLogins.push(login);
//   }
//   return message;
// }

// const hello = "Hello word!!!";
// console.log(hello);

// Задача 3 - 1
// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')

// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// //Write code under this line
// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// // Write code under this line
// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   message += `${key}: ${value}\n`;
// }

// console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

// Задача 3 - 2
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться

// const countProps = function (obj) {
//   "use strict";
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Задача 3 - 3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   "use strict";
//   let bestEmployee = "";
//   const maxNumber = Math.max(...Object.values(employees));
//   console.log(maxNumber);
//   const entries = Object.entries(employees);
//   for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     // console.log(`${key}: ${value}`);
//     if (value === maxNumber) {
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// Задача 3 - 4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   "use strict";
//   let total = 0;
//   const values = Object.values(employees);
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// Задача 3 - 5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   "use strict";
//   let newArray = [];
//   //   console.log(array);

//   for (const obj of array) {
//     // console.log(obj);
//     if (prop in obj) {
//       newArray.push(obj[prop]);
//     }
//   }
//   return newArray;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []

// Задача 3 - 6
// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена умноженная на количество).
// Вызовы функции для проверки работоспособности твоей реализации.
// calculateTotalPrice(products, 'Радар')); // 9080
// calculateTotalPrice(products, 'Сканер')); // 10200
// calculateTotalPrice(products, 'Захват')); // 2400
// calculateTotalPrice(products, 'Дроид')); // 2800

// function calculateTotalPrice(array, prop) {
//   "use strict";
//   let total = 0;
//   for (const obj of array) {
//     // console.log(obj.name);
//     if (prop === obj.name) {
//       total += obj.price * obj.quantity;
//       total;
//     }
//     // return total;
//   }
//   return total;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// // 2800

// =====================================================
console.log("Задача 4 - 1 // Callback функция \n");

// Функция mapArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова(callback).Функция mapArray создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.
// Оформи создание массива numbers нужной длины используя new Array() и необходимый аргумент для задания длины, равной длине array.
// Напиши функцию обратного вызова addIndex, которая принимает два параметра - element и index и возвращает число - сумму element и index(сложение).
// Напиши функцию обратного вызова subIndex, которая принимает два параметра - element и index и возвращает число - разность element и index(вычитание).

// const addIndex = function (element, index) {
//   return element + index;
// };
// // Write code under this line
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   "use strict";
//   // Write code under this line
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]

// =====================================================
console.log("Задача 4 - 2 // Callback функция и метод push \n");

// Функция isUniq принимает три параметра - element, index и arr.Функция возвращает true или false в зависимости от того встречается ли элемент первый раз в массиве(true) или этот элемент в массиве уже встречался(false).
// Функция isEven принимает один параметр - element.Функция возвращает true или false в зависимости от того является ли элемент четным числом или нет.
// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова(callback).Дополни тело функции так, чтобы функция filterArray заполняла новый пустой массив numbers только теми элементами из массива array, для которых вызов функции cb вернет true.

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     console.log(cb);
//     if (cb(element, index, array) === true) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// =====================================================
console.log(
  "Задача 4 - 3 // Callback функция для получения одного значения массива \n"
);

// Функции add, sub и mult принимают два параметра - accum и element, возвращает число - сумму, разность или произведение параметров.
// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива в зависимости от того какая именно из трех функция(add, mult, sub) будет передана в качестве cb.

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   "use strict";
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// =====================================================
console.log("Задача 4 - 4 // this в методах объекта \n");

//Расставь отсутствующие this в методах объекта account.
// В комментариях показаны операции с объектом и ожидаемые результаты.

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//     console.log(value);
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// //console.log(account.discount); // 0.15

// //console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// //console.log(account.balance); // 19000

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']

// =====================================================
console.log("Задача 4 - 5 // bind для замены this в методах объекта \n");

// Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов
// inventory.add
// inventory.remove выступал объект inventory

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter((item) => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   "Medkit",
//   inventory.add.bind(inventory) // Write code in this line
// );
// // console.log(inventory.add);
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   "Gas mask",
//   inventory.remove.bind(inventory) // Write code in this line
// );

// const arrayRemove = [...inventory.items];

// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']

/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objA = {
//   a: 1,
//   b: 5,
// };

// const objB = {
//   c: 10,
// };

// const objA = Object.create(objB);
// console.log(objA.c);

// objA.a = 3;
// objA.b = 5;
// console.log(objA);

// Прототипное наследование:
// 1. Создаем ф - ю конструктор которая в будущие объекты будет добавить свойства с одинаковыми именами, но разными значениями на каждом вызове.
// 2.  В свойство.prototype функции конструктора добавляем методы, которые будут доступны по ссылке.
// 3. Вызываем ф - ю конструктор через new передавая аргументы.
// 4. new создаёт новый объект в который добавляются свойства со значениями и ссылка на объект.prototype.

// const Manager = function (name, salse, say) {
//   this.name = name;
//   this.salse = salse;
//   this.say = say;
// };

// const mango = new Manager("Mango", 5, "Hello!");
// console.log(mango);

// const poly = new Manager("Poly", 7, "Hi!");

// console.log(poly);

// Manager.prototype.sell = function () {
//   this.salse += 1;
// };

// Manager.prototype.chengeName = function (name) {
//   this.name = name;
// };

// mango.sell();
// console.log(mango);
// mango.sell();
// console.log(mango);
// mango.sell();
// console.log(mango);
// poly.chengeName("Polllly");
// console.log(poly);

// console.log(mango.__proto__ === Manager.prototype); // true

// const a = {};
// console.log(a.__proto__ === Object.prototype); // true

// const b = [];
// console.log(b.__proto__ === Array.prototype); // true

// =====================================================
console.log("Задача 5 - 1 // function-constructor\n");

// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };
// console.log(typeof Account.prototype.getInfo); // 'function'

// const mango = new Account("Mangozedog", "mango@dog.woof");
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account("Poly", "poly@mail.com");
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

// =====================================================
console.log("Задача 5 - 2 // class \n");

// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// console.log(typeof User);
// // ("function");

// const mango = new User("Mango", 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User("Poly", 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'

// =====================================================
console.log("Задача 5 - 3 // использование методов класса \n");

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     let index = this.items.indexOf(item);
//     if (index > -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }

// console.log(typeof Storage);
// // 'function'

// const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// const storage = new Storage(goods);
// console.log(storage.getItems());
// console.log(storage);
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem("Дроид");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */
// // console.log(new Storage.items());

// =====================================================
console.log("Задача 5 - 4 // переиспользование методов класса \n");

// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value += str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str, append, prepend) {
//     append = this.append(str);
//     prepend = this.prepend(str);
//   }
// }

// console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// =====================================================
console.log("Задача 5 - 5 // класс \n");

// Напиши класс Car с указанными свойствами и методами.

// class Car {
//     /*
//      * Добавь `статический` метод
//      * `getSpecs(car)`, который принимает
//      * объект-машину как параметр
//      * и возвращает шаблонную строку
//      * со свойствами и значениями объекта.
//      * Свойства:
//      *   maxSpeed,
//      *   speed,
//      *   isOn,
//      *   distance,
//      *   price
//      * Пример строки, полученной этим методом:
//      * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
//      */

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость,
//      *          начальное значение `0`
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль.
//      *         Значения `true` или `false`,
//      *         начальное значение false
//      *  distance - пробег в километрах,
//      *             начальное значение `0`
//      */
//     constructor() { }

//     /*
//      * Добавь геттер и сеттер
//      * для свойства `price`, который будет
//      * работать с свойством цены автомобиля.
//      *
//      * ВАЖНО: для записи методов get и set
//      * значение параметра записывают с
//      * подчеркиванием. См. ниже пример 1.
//      */

//     /*
//      * Метод, который заводит автомобиль
//      * Записывает в свойство `isOn` значение `true`
//      */
//     turnOn() { }

//     /*
//      * Метод, чтобы заглушить автомобиль
//      * Этот метод должен записывать
//      * в свойство isOn значение false,
//      * и сбрасывать текущую скорость до 0
//      */
//     turnOff() { }

//     /*
//      * Этот метод должен добавлять
//      * к свойству `speed` полученное
//      * значение, при условии,
//      * что результирующая скорость
//      * не больше чем значение свойства `maxSpeed`
//      */
//     accelerate(value) { }

//     /*
//      * Этот метод должен отнимать
//      * от свойства `speed`
//      * полученное значение, при условии,
//      * что результирующая скорость не меньше 0
//      */

//     decelerate(value) { }

//     /*
//      * Этот метод должен добавлять к свойству
//      * `distance` пробег в километрах,
//      * т.е. hours * speed,
//      * но только в том случае,
//      * если машина заведена!
//      */
//     drive(hours) { }
// }

// #### Пример 1.

//     ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// class Car {
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//   }

//   constructor(objValue) {
//     this.distance = 0;
//     this.speed = 0;
//     this.maxSpeed = objValue.maxSpeed;
//     this._price = objValue.price;
//     this.isOn = false;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     this._price = value;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     if ((this.isOn = false)) {
//       this.speed = 0;
//     }
//   }

//   accelerate(value) {
//     let newSped = this.speed + value;
//     if (newSped > this.maxSpeed) {
//       this.speed = this.maxSpeed;
//     } else {
//       this.speed = newSped;
//     }
//   }

//   decelerate(value) {
//     let newSped = (this.speed -= value);
//     if (this.speed > 0) {
//       this.speed = newSped;
//     } else {
//       this.speed = 0;
//     }
//   }

//   drive(hours) {
//     this.distance += hours * this.speed;
//   }
//   // Write code under this line
//   //   getSpecs() {}
//   //   constructor() {}
//   //   get price() {}
//   //   set price(value) {}
//   //   turnOn() {}
//   //   turnOff() {}
//   //   accelerate(value) {}
//   //   decelerate(value) {}
//   //   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

console.log("\n");
// =====================================================
console.log("Задача 6 - 1 // map \n");

// Получи массив имен всех пользователей(свойство name) используя деструктурирующее присваивание для параметра функции({ name }) без пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.
// Деструктурирующее присваивание для параметра функции

// PS Деструктурирующее присваивание(ДП):
// Объект как параметр без ДП
// const object = { num: 2 }
// function getNum(obj) { return obj.num; }
// console.log(getNum(object)) // 2

// ДП
// const object = { num: 2 }
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2

// Объект как параметр c ДП
// const object = { num: 2 }
// //function getNum (obj) { return obj.num; }
// function getNum({ num }) { return num; }
// console.log(getNum(object)) //

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// const userNames = users.map((user) => user.name);
// console.log("userNames", userNames);

// Объект как параметр без ДП
// const object = { num: 2 }
// function getNum(obj) { return obj.num; }
// console.log(getNum(object)) // 2

// ДП
// const object = { num: 2 }
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2

// Объект как параметр c ДП
// const object = { name: "Moore Hensley" };
// //function getNum (obj) { return obj.name; }
// function getNum({ name }) {
//   return name;
// }
// console.log(getNum(object)); //

// const getUserNames = (array) => array.map(({ name }) => name);
// console.log(getUserNames(users));
/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */

// =====================================================
console.log("Задача 6 - 2 // filter \n");

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.
// Получи массив объектов пользователей, отобранный по цвету глаз(свойство eyeColor), используя деструктурирующее присваивание для параметра функции({ eyeColor }) без пробелов и переносов на новую строку.

// const getUsersWithEyeColor = (array, color) =>
//   array.filter(({ eyeColor }) => eyeColor === color);
// console.log(getUsersWithEyeColor(users, "blue"));

/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */

// =====================================================
console.log("Задача 6 - 3 // filter, map \n");

// Получи массив имен пользователей(значение свойства name) по полу(значение свойства gender).
// Используй деструктурирующее присваивание для параметра функции({ name }) без пробелов и переносов на новую строку.
// нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithGender = (array, gender) =>
//   array.filter((obj) => obj.gender === gender).map(({ name }) => name);
// console.log(getUsersWithGender(users, "male"));

/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */

// =====================================================
console.log("Задача 6 - 4 // filter и оператор! \n");

// Получи массив только неактивных пользователей(отфильтруй по значению свойства isActive)
// Используй деструктурирующее присваивание для параметра функции({ isActive }) без пробелов и переносов на новую строку.
// Используй оператор!.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getInactiveUsers = (array) => array.filter(({ isActive }) => !isActive);
// console.log(getInactiveUsers(users));

/* [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  }
]; */

// =====================================================
console.log("Задача 6 - 5 // find \n");

// Получи объект пользователя(не массив) по уникальному значению свойства email.
// Используй деструктурирующее присваивание для параметра функции({ email }) без пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUserWithEmail = (array, mail) =>
//     array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, "rossvazquez@xinware.com"));
/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */

// =====================================================
console.log("Задача 6 - 6 // filter, map и создание анонимных объектов \n");

// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, которые попадают в возрастную категорию от min до max лет(значение свойства age).
// Сравнение, пример
// const x = 13;

// // num больше 10 ?
// const larger = num > 10; // true

// // num меньше 100 ?
// const smaller = 100 > num; // true

// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithAge = (array, min, max) =>
//   array
//     .filter(({ age }) => age > min && age < max)
//     .map(({ name, email }) => ({ name, email }));

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

// =====================================================
console.log("Задача 6 - 7 // reduce \n");

// Получи общую сумму баланса(сумму значений свойства balance) всех пользователей.
// Используй деструктурирующее присваивание для параметра функции { balance } без пробелов и переносов на новую строку
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const calculateTotalBalance = (array) =>
//   array.reduce((acc, { balance }) => {
//     return acc + balance;
//   }, 0);

// console.log(calculateTotalBalance(users));
// // 20916

// =====================================================
console.log("Задача 6 - 8 // filter, includes и map \n");

// Получи массив имен всех пользователей у которых есть друг с заданным именем.
// Используй деструктурирующее присваивание для параметра функции { friends } и({ name }) без пробелов и переносов на новую строку
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// console.log(getUsersWithFriend(users, "Briana Decker"));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// // [ 'Elma Head', 'Sheree Anthony' ]

// =====================================================
console.log("Задача 6 - 9 // sort и map \n");

// Получи массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)
// Избегаем мутации исходного массива: т.к.метод sort изменяет(мутирует) исходный массив, то следует сделать копию массива и сортировать уже копию, а не исходный массив.
// Копирование массива:
// const arr = [1, 3, 5];
// // 1
// const first = [...arr];
// // 2
// const second = arr.slice();
// // 3
// const third = arr.concat();
// Используй деструктурирующее присваивание для параметра функции({ name })` без пробелов и переносов на новую строку
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// const getNamesSortedByFriendsCount = (array) =>
//   (array = [...array].sort((prevUser, nextUser) => {
//     return prevUser.friends.length - nextUser.friends.length;
//   })).map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// =====================================================
console.log("Задача 6 - 10 // reduce, filter, sort \n");

// Получи массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// Слияние массивов:
// const odd = [1, 3, 5];
// const even = [2, 4, 6];
// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]
// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getSortedUniqueSkills = (array) =>
//   array
//     .reduce(function (acc, obj) {
//       return [...acc, ...obj.skills];
//     }, [])
//     .filter((value, index, self) => self.indexOf(value) === index)
//     .sort(function (a, b) {
//       if (a < b) {
//         return -1;
//       }
//       if (a > b) {
//         return 1;
//       }
//       return 0;
//     });

// console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
