//  // Lesson 4

// /*
//  * Функция обратного вызова (callback)
//  * - Функция может принимать другие функции как параметры
//  * - Функция которая передаётся другой функции как аргумент называетс
//  *   «функцией обратного (отложенного) вызова» (callback-функция)
//  * - Функция которая принимает другую функцию как параметр
//  *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
//  */

// // const fnA = function (message, callback) {
// //     console.log(message);

// //     console.log(callback);
// //     callback(100);
// // };

// // const fnB = function (number) {
// //     console.log('Это лог при вызове fnB', number);
// // };

// // fnA('qweqwe', fnB);

// /*
//  * функция doMath(a, b, callback)
//  */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// // doMath(2, 3, function (x, y) {
// //     return x + y;
// // });

// // doMath(10, 8, function (x, y) {
// //     return x - y;
// // });

// /*
//  * Отложенный вызов: регистрация событий
//  */

// const buttonRef = document.querySelector(".js-button");

// const handleBtnClick = function () {
//   console.log("Клик по кнопке " + Date.now());
// };

// // buttonRef.addEventListener('click', handleBtnClick);

// /*
//  * Отложенный вызов: геолокация
//  */

// const onGetPositionSuccess = function (position) {
//   console.log("Это вызов onGetPositionSuccess");
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log("Это вызов onGetPositionError");
//   console.log(error);
// };

// // window.navigator.geolocation.getCurrentPosition(
// //     onGetPositionSuccess,
// //     onGetPositionError,
// // );

// /*
//  * Отложенный вызов: интервалы
//  */

// const callback = function () {
//   console.log("Через 2 секунды внутри колбека в таймауте");
// };

// // console.log('В коде перед таймаутом');
// // setTimeout(callback, 2000);
// // console.log('В коде после таймаута');

// /*
//  * Отложенный вызов: http-запрос
//  * - API URL: https://pokeapi.co/api/v2/pokemon
//  */

// const onRequestSuccess = function (response) {
//   console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
//   console.log(response);
// };

// // fetch('https://pokeapi.co/api/v2/pokemon')
// //     .then(res => res.json())
// //     .then(onRequestSuccess);

// /*
//  * Фильтр
//  */

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// // 1. надо передать функцию
// // 2. функция получает элемент массива
// // 3. если элемент массива удовлетворяет условию то функция вернет true
// // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// /*
//  * Функция результатом своей работы может возвращать другую функцию.
//  *
//  * Возвращаемая функция во время вызова будет иметь доступ
//  * ко всем локальным переменным (области видимости)
//  * родительской функции (той из которой её вернули),
//  * это называется «замыкание».
//  */

// const fnA = function (parameter) {
//   const innerVariable = "значение внутренней переменной функции fnA";

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("Это вызов innerFunction");
//   };

//   return innerFunction;
// };

// // const fnB = fnA(555);

// // fnB();

// // console.log(fnB);

// /*
//  * Поварёнок
//  */
// // const makeDish = function (sheffName, dish) {
// //     console.log(`${sheffName} готовит ${dish}`);
// // };

// // makeDish('Mango', 'пирожок');
// // makeDish('Mango', 'омлет');
// // makeDish('Mango', 'чай');

// // makeDish('Poly', 'котлеты');
// // makeDish('Poly', 'супик');
// // makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//   const innverVar = 555;
//   const message = "hello";

//   const makeDish = function (dish) {
//     console.log(message);
//     console.log(innverVar);
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// // const mango = makeSheff('Mango');

// // console.dir(mango);

// // mango('котлеты');
// // mango('пирожок');

// // const poly = makeSheff('Poly');

// // console.dir(poly);

// // poly('чай');
// // poly('омлет');

// // console.dir(mango);

// /*
//  * Округлятор 🤷‍♂️
//  */

// // const floatingPoint = 3.456789;
// // const someInt = Math.round(floatingPoint); // 3
// // const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// // const rounder = function (number, places) {
// //     return Number(number.toFixed(places));
// // };

// // console.log(rounder(3.4567, 2));
// // console.log(rounder(3.4567, 3));
// // console.log(rounder(5.1234, 2));
// // console.log(rounder(3.4567, 3));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// // const rounder2 = rounder(2);
// // const rounder3 = rounder(3);

// // console.dir(rounder2);
// // console.dir(rounder3);

// // console.log(rounder2(3.4567));
// // console.log(rounder2(5.4512312312367));
// // console.log(rounder3(3.4567));
// // console.log(rounder2(5.1234));
// // console.log(rounder3(3.4567));
// // console.log(rounder3(10.67667));

// /*
//  * Приватные данные и функции - скрытие реализации, интерфейс
//  */

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       if (amount > 1000) {
//         return "Ты офигел?";
//       }

//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `Текущая зарпалата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory("Mango", 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// // const myLibFactory = function () {
// //     let value = 0;

// //     const add = function (num) {
// //         value += num;
// //     };

// //     return {
// //         add: add,
// //         getValue() {
// //             return value;
// //         },
// //     };
// // };

// // const myLib = myLibFactory();

// // console.dir(myLib.getValue);

// // console.log(myLib);
// // console.log(myLib.getValue());
// // myLib.add(10);
// // console.log(myLib.getValue());

// *
//  * Стрелочные функции
//     * - Объявление
//     * - Явный и неявный возврат
//         * - Аргументы
//         * - Неявный возврат объекта
//             * /

// // const add = function (a, b, c) {
// //     console.log(arguments);
// //     return a + b + c;
// // };

// // const addArrow = (a, b, c) => {
// //     return a + b + c;
// // };

// // console.log(add(5, 10, 15));
// // console.log(addArrow(5, 10, 15));

// // const fnA = function () {
// //   return {
// //     a: 5,
// //   };
// // };

// // console.log(fnA());

// // const arrowFnA = () => ({ arrowA: 5 });

// // console.log(arrowFnA());

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// // const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// // const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);

// /*
//  * Операция spread (распыление)
//  * - Array.prototype.concat() и аналог через spread
//  */

// // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [
//     1000,
//     ...[1, 2, 3],
//     5000,
//     ...[4, 5, 6],
//     7000,
//     ...[7, 8, 9],
//     9000,
// ];

// // console.log(numbers);

// /*
//  * Поиск самой маленькой или большой температуры (числа)
//  */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// // console.log(Math.max(1, 4, 17, 5, 6));
// // console.log(Math.min(...temps));
// // console.log(temps);

// // const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// // const b = [...a];

// // console.log('a: ', a);
// // console.log('b: ', b);

// // console.log(a[0] === b[0]);
// // console.log(a === b);

// // a[0].x = 1000;

// // console.log('a: ', a);
// // console.log('b: ', b);

// /*
//  * Сшиваем несколько массивов в один через concat() и spread
//  */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// // console.log(allTemps);

// /*
//  * Распыление объектов
//  * - Object.prototype.assign() и spread
//  */
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({name: 'Mango' }, a, b);

// const c = {
//     ...a,
//     x: 10,
//     ...b,
//     y: 20,
// };

// // console.log(c);

// const defaultSettings = {
//     theme: 'light',
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// };

// console.log(finalSettings);

// /*
//  * Деструктуризация объекта
//  * - Значения по умолчанию
//  * - Имя переменной отличное от имени свойства
//  */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// // const {
// //   rating,
// //   tracks,
// //   name,
// //   trackCount: numberOfTracks = 0,
// //   author = 'user',
// // } = playlist;

// // console.log(numberOfTracks);

// /*
//  * Глубокая деструктуризация
//  */

// // const profile = {
// //   name: 'Jacques Gluke',
// //   tag: 'jgluke',
// //   location: 'Ocho Rios, Jamaica',
// //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// //   stats: {
// //     followers: 5603,
// //     views: 4827,
// //     likes: 1308,
// //   },
// // };

// // const {
// //   avatar,
// //   name,
// //   tag,
// //   location,
// //   stats: { followers, views, likes },
// // } = profile;

// // console.log(name, tag, location, avatar, followers, views, likes);

// /*
//  * Деструктуризация массивов
//  */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// // console.log(red, green, blue);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// // console.log(entries);

// // for (const [name, rating] of entries) {
// //   // ур2
// //   // const [name, rating] = entry;

// //   // ур1
// //   // const name = entry[0];
// //   // const rating = entry[1];

// //   console.log(name, rating);
// // }

// /*
//  * Операция rest (сбор)
//  */
// // const profile = {
// //   name: 'Jacques Gluke',
// //   tag: 'jgluke',
// //   location: 'Ocho Rios, Jamaica',
// //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// //   stats: {
// //     followers: 5603,
// //     views: 4827,
// //     likes: 1308,
// //   },
// // };

// // const { name, tag, location, ...restProps } = profile;

// // console.log(name, tag, location);
// // console.log(restProps);
// // console.log(profile);

// /*
//  * Паттерн «Обьект настроек»
//  * - деструктуризация параметра-обьекта в подписи функции
//  * - rest при деструктуризации в подписи
//  */

// const showProfileInfo = function (userProfile) {
//     const { name, tag, location, ...restProps } = userProfile;

//     // console.log(name, tag, location, avatar, followers, views, likes);
//     console.log(restProps);
// };

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const makeProfileMarkup = function (userProfile) {
//     const {
//         avatar = 'https://i.pravatar.cc/400?img=6',
//         name,
//         tag,
//         location = 'Planet Earth',
//         stats: { followers, views, likes },
//     } = userProfile;

//     return `<div>
//     <img src="${avatar}" alt="user avatar">
//     <p>${name}<span>@${tag}</span></p>
//     <p>Location: ${location}</p>
//     <ul>
//       <li>Followers: ${followers}</li>
//       <li>Views: ${views}</li>
//       <li>Likes: ${likes}</li>
//     </ul>
//   </div>`;
// };

// const markup = makeProfileMarkup(profile);

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);

// /*
//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
//  */

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const item = items[i];

//             if (productName === item.name) {
//                 console.log('нашли такой продукт ', productName);
//                 console.log('индекс: ', i);

//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//     },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());
