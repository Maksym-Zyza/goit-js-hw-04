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

function isLoginValid(login, min = 4, max = 16) {
  for (let i = 0; i < login.length; i += 1) {
    return min <= login.length && login.length <= max ? true : false;
  }
}
// console.log(isLoginValid(["Mango", "robotGoogles", "Ploy"]));
// console.log(isLoginUnique(["Mango", "robotGoogles", "Ploy"], "Mango"));

function isLoginUnique(allLogins, login) {
  "use strict";
  //   console.log(login);
  return allLogins.includes(login) ? false : true;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  console.log(login);
  console.log(allLogins);
  if (isLoginValid(login) === false) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) !== true) {
    message = REFUSAL;
  } else if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) !== false
  ) {
    message = SUCCESS;
    logins.push(login);
  }
  return message;
}
// }
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
//("Логин успешно добавлен!");

console.log(addLogin(logins, "robotGoogles"));
//("Такой логин уже используется!");

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

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

// Задача 4 - 1
// Callback функция
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

// Задача 4 - 2
// Callback функция и метод push
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

// Задача 4 - 3
// Callback функция для получения одного вычисляемого значения массива
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

// Задача 4 - 4
// this в методах объекта
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

// Задача 4 - 5
// bind для замены this в методах объекта
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
