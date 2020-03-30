// Спрашивать (prompt) у пользователя размер памяти телефона
// и вывоедите (alert/document.write()) соответствующую цену

// 64GB - 300$
// 128GB - 500$
// 256GB - 700$
for (let counter = 0; counter <15; counter++){
let mem = prompt ("Какой размер памяти Вам нужен? 64GB 128GB 256GB");
console.log (mem);
console.log(NaN === NaN);
if (mem === null || !+mem) {
  console.log("Неккоректный ввод");

} else {
  if (+mem == 64 ) {
    alert("300$");
    break;
  } else if (+mem== 128) {
    alert("500$");
    break;
  } else if (+mem== 256) {
    alert("700$");
    break;
  } else {
    alert("выберите один из 3 вариантов 64, 128, 256"); 
  }
}
}


// Спрашивать у пользователя цвет телефона
// и показывать соответствующую картинку

// let price = 0;
// if (memory === 64) {
//     price = 300;
// }

// alert(price)


