

// 1 ЗАДАНИЕ

// Спрашивать (prompt) у пользователя размер памяти телефона
// и вывоедите (alert/document.write()) соответствующую цену

// 64GB - 300$
// 128GB - 500$
// 256GB - 700$

while (true){
let mem = prompt ("Какой размер памяти Вам нужен? 64 или 128 или 256", " ");
console.log (mem);
console.log(NaN === NaN);
let price=0;
if (mem === null){
    break;
}
if (!+mem) {
  console.log("Неккоректный ввод");
  alert("Вы ничего не ввели или ввели строку ");
 
} else {

  if (+mem == 64 ) {
    price=300;    
    } else if (+mem== 128) {
    price=500;     
  } else if (+mem== 256) {
    price=700;       
  } else {
    alert("выберите один из 3 вариантов 64, 128, 256"); 
  }
}
if(price!=0){
alert('Цена телефона: ' + price + '$');
break
}
}


// 2 ЗАДАНИЕ

// Спрашивать у пользователя цвет телефона
// и показывать соответствующую картинку


// let color = prompt ("Какой цвет телефона вас интересует? \n    \nБелый(White) \nЧерный(Black) \nЗеленый(Green) \nКрасный(Red) \nЖелтый(Yellow) \nПурпурный(Purple)",);
// if (color==="Белый"  || color==="White"){
//     imageUrl = "White.png";
//     } else if (color==="Черный" || color==="Black" ){
//         imageUrl = "Black.png";
//       } else if (color==="Зеленый" || color==="Green"){
//         imageUrl = "Green.png";
//         } else if (color==="Красный" || color==="Red"){
//             imageUrl = "Red.png";
//         } else if (color==="Желтый" || color==="Yellow"){
//             imageUrl = "Yellow.png";
//         }  else if (color==="Пурпурный" || color==="Purple"){
//             imageUrl = "Purple.png";
//         } else{
//     document.write("У нас нет такого цвета");
//     }
//  document.write('<img src=img/'+ imageUrl + '  alt=');
