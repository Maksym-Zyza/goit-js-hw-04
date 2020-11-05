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

//

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.description = "This is a Hero base class";

// Hero.showStats = function (hero) {
//   console.Log("Loggin stats from Hero.showStats: ", hero);
// };

// console.dir(Hero);

// Hero.prototype.changeName = function (name) {
//   this.nsme = name;
// };

// const mango = new Hero("Mango", 1000);
// console.log(mango);

// Функция констркуктор через Классы

// class Hero {
//   static description = "This is a Hero base class";

//   static showStats(hero) {
//     console.Log("Loggin stats from Hero.showStats: ", hero);
//   }

//   constructor(name, xp) {
//     this._name = name;
//     this.xp = xp;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }

//   // changeName(name) {
//   //   this.nsme = name;
//   // }

//   // getName() {
//   //   return this.name;
//   // }

//   gainXp(amount) {
//     console.log(`${this.name} получил ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// console.dir(Hero);

// const mango = new Hero("Mango", 1000);
// const poly = new Hero("Poly", 2000);

// mango.gainXp(2000);
// console.log(mango);

// poly.gainXp(2000);
// console.log(poly);

// mango.name = "Maangooo";
// console.log(mango.name);

// Наследование классов

class Hero {
  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} очков опита`);
    this.xp += amount;
  }
}

console.dir(Hero);

const mango = new Hero("Mango", 1000);
const poly = new Hero("Poly", 2000);

mango.gainXp(2000);
console.log(mango);

poly.gainXp(2000);
console.log(poly);

console.log("\n");

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} использует ${this.weapon}`);
//   }
// }

// const garri = new Warrior("Gerri", 2000, "'Меч Правосудия'");
// garri.attack();
// garri.gainXp(3000);
// console.log(garri);

// console.log("\n");

// class Mag extends Warrior {
//   constructor(name, xp, weapon, magic) {
//     super(name, xp, weapon);
//     this.magic = magic;
//   }

//   magicAttack() {
//     console.log(`${this.name} производит заклинание ${this.magic}`);
//   }
// }

// const ajax = new Mag("Ajax", 5000, "'Трость Верховного Мага'", "'Тухлое яйцо'");
// ajax.attack();
// ajax.gainXp(3000);
// ajax.magicAttack();
// console.log(ajax);

// class Casia extends Hero {
//   constructor(name, xp, weapon, magic) {
//     super(name, xp, weapon);
//     this.magic = magic;
//   }

//   codName() {
//     console.log(`${this.name} - Кодове ім'я 'Пухнатий Кругляшок' `);
//   }
//   weaponAttack() {
//     console.log(`${this.name} застосовує секретну зброю ${this.weapon}`);
//   }
//   magicAttack() {
//     console.log(`${this.name} застосовує секретну магію ${this.magic}`);
//   }
// }

// const casia = new Casia("Casia", 5, "'Лапкою Тронь-Тронь'", "'Туління'");
// casia.codName();
// casia.weaponAttack();
// casia.magicAttack();
// casia.gainXp(5);

/* MODULE 6
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);
// // number 5
// // number 10
// // number 15
// // number 20
// // number 25
// // (5)[5, 10, 15, 20, 25]

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];
// const doubledNums = numbers.map((number) => {
//   return number * 3;
// });

// console.log("numbers", numbers);
// console.log("numbers", doubledNums);
// numbers(5)[5, 10, 15, 20, 25]
// numbers(5)[15, 30, 45, 60, 75]

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
// console.table(players);

// const playerNames = players.map((player) => player.name);
// console.log("playerNames", playerNames);

// const playerIds = players.map((player) => player.id);
// console.log("playerIds", playerIds);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// const updatedPoints = players.map((player) => ({
//   ...player,
//   points: Math.round(player.points * 1.1),
// }));
// console.table(updatedPoints);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// console.table(updatedPlayers);
