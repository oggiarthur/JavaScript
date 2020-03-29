// let age = 30;

// if (age >= 18) {
//   console.log("держи пиво");
// } else {
//   console.log("приходи с папой");
// }

// let x = "false";
// false - false, 0, null, undefined, "";

// if (x) {
//   console.log("xxxxx");
// }

// alert("Hello world");
// let x = confirm("???");
// let x = prompt("???");
// console.log(x);

// let age = prompt("Сколько лет ??");
// // console.log(age);

// // console.log(NaN === NaN);

// if (age === null || !+age) {
//   console.log("Пока!");
// } else {
//   if (+age >= 18) {
//     console.log("держи пиво");
//   } else {
//     console.log("приходи с папой");
//   }
// }

// let x = true;
// console.log(!x);

// let x = 10;
// let y = 10;
// // console.log(x == y);
// // console.log(x != y);
// console.log(x === y);
// console.log(x !== y);

// &&
// false false = flase
// false true = false
// true true = true

// ||
// false false = flase
// false true = true
// true true = true

// let x = true;
// let y = "sdfsdfsd";
// // console.log(!!y);

// console.log(x === !!y);

// Спрашивать (prompt) у пользователя размер памяти телефона
// и вывоедите (alert/document.write()) соответствующую цену

// 64GB - 300$
// 128GB - 500$
// 256GB - 700$

// Спрашивать у пользователя цвет телефона
// и показывать соответствующую картинку

// let price = 0;
// if (memory === 64) {
//     price = 300;
// }

// alert(price)

let mem = prompt ("Какой размер памяти Вам нужен? 64GB 128GB 256GB");
console.log (mem);
console.log(NaN === NaN);
if (mem === null || !+mem) {
  console.log("Неккоректный ввод");
} else {
  if (+mem == 64 ) {
    alert("300$");
  } else if (+mem== 128) {
    alert("500$");
  } else if (+mem== 256) {
    alert("700$");
  } else {
    alert("выберите один из 3 вариантов 64, 128, 256"); 
  }
}
