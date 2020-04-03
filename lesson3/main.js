// let memory, img, color;
// let price = 0;

// let memories = [
//   {
//     memory: 64,
//     price: 300
//   },
//   {
//     memory: 128,
//     price: 500
//   },
//   {
//     memory: 256,
//     price: 700
//   },
//   {
//     memory: 32,
//     price: 200
//   }
// ];

// let colors = [
//   {
//     name: "black",
//     img: "black1.png",
//     price: 10
//   },
//   {
//     name: "gold",
//     img: "gold.png",
//     price: 5
//   },
//   {
//     name: "silver",
//     img: "silver.png",
//     price: 0
//   }
// ];

// memory: while (true) {
//   memory = prompt("Memory ?");
//   if (memory === null) {
//     break;
//   }
//   for (let i = 0; i < memories.length; i++) {
//     if (+memory === memories[i].memory) {
//       price = memories[i].price;
//       break memory;
//     }
//   }
// }

// color: while (price) {
//   color = prompt("Color ?");
//   if (color === null) {
//     break;
//   }
//   for (let i = 0; i < colors.length; i++) {
//     if (color === colors[i].name) {
//       img = colors[i].img;
//       price += colors[i].price;
//       break color;
//     }
//   }
// }

// if (price) {
//   document.write(`<h1>Price: ${price}$</h1>`);
// }
// if (img) {
//   document.write(`<img src="img/${img}">`);
// }
// if (!price && !img) {
//   document.write(`<h1>ПОКА!</h1>`);
// }

// let arr = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// let arr = [1, 2, 3, 4, 5, 6, 7, 10, 23, 22];
// let str = "Some. word. is here";

// let res = arr.push("Sat");
// let res = arr.pop();
// let res = arr.unshift("NEW");
// let res = arr.shift();
// let res = arr.slice(1, 4);
// let res = arr.splice(2, 0, "NEW ELEMENT");
// let res = arr.join(" | ");
// let res = str.split(".");
// let res = arr.reverse();
// let res = arr.sort();

// console.log(arr, res);
// console.log(res);

// let func1 = function() {
//   let a = 2 + 2;
//   console.log(a);
// };

// func1();

// function func1() {
//   let a = 2 + 2;
//   console.log(a);
// }

// func1();

// let sum = function(a, b, c, d, x, z) {
//   console.log(a + b);
//   console.log(c);
// };

// let sum = function(a, b) {
//   console.log(a + b);
// };

// sum(3, 20, 4, 5);
// sum(4, 45);
// sum(16, 33);

// let sum = function(a, b) {
//   return a + b;
//   console.log("!!!!!!!!");
// };

// let x = sum(20, 40);
// console.log(x - 5);

// if (true) {
//   var x = 10;
// }

// console.log(x);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("OUT", i);

// function f1() {
//   var x = 10;
// }
// f1();
// console.log(x);

// let app = function() {
//   let x = 10;
//   console.log("FROM 1 FILE", x);
// };
// app();

// IIFE
// (function() {
//   let x = 10;
//   console.log("11111", x);
// })();

// let greet = function() {
//   console.log(`Hello! I'm ${this.name}`);
// };

// let man = {
//   name: "Bob",
//   greet: greet
// };

// let girl = {
//   name: "Kate",
//   greet: greet
// };

// man.greet();
// girl.greet();

// let a = 1;
// let f1 = function() {
//   a++;
//   return a;
// };

// let b = 10;
// let f2 = function() {
//   b++;
//   return b;
// };

// console.log(f1());
// console.log(f1());
// console.log(f1());
// console.log("______");
// console.log(f2());
// console.log(f2());
// console.log(f2());

// let f1 = function(start) {
//   // start
//   return function() {
//     start++;
//     return start;
//   };
// };

// let f2 = f1(1);
// let f3 = f1(10);

// console.log(f2());
// console.log(f2());
// console.log(f2());
// console.log(f2());
// console.log(f3());
// console.log(f3());
// console.log(f3());
// console.log(f3());

// let sum = function(a, b) {
//   let x = 10;
//   let y = 50;
//   return a + b;
// };

// sum(2, 2);

// Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

// let generator = function(start, step) {
//     return function() {

//     }
// }

// ПРИМЕР:
// var generator = sequence(10, 3);
// var generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13

// console.log(generator2()); // 7

// console.log(generator()); // 16

// console.log(generator2()); // 8

// Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.

// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
