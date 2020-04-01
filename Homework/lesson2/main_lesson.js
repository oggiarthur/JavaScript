
// 1) Создать двумерный массив (с нулями) спрашивая у пользователя его размерность
// let length = 5;
// let arr = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
//   ];
//   console.log(arr);

// let arr=prompt ("Ведите размер масива");
// let table = new Array(+arr);
// for (let i = 0; i < table.length; i++) { 
//     table[i] = new Array(+arr);            
// }
// for (let row = 0; row < table.length; row++) {
//     for (let col = 0; col < table[row].length; col++) {
//         table[row][col] = 0;
//         document.write(table[row][col]);           
//     } 
//    document.write("<br>");
//    }
// console.log(table);


// 2) Если пользователь ввел неправильный объем памяти - переспрашивать.
// Если пользователь нажал отмена - выходить.
// Если пользователь ввел корректный объем памяти спрашивать у него цвет телефона
// Если все введено вверно и пользователь нигде не нажал отмена - выводить (document.write) цену и картинку телефона

let memories =[
    {
        memory:64,
        price:300
    },
    {
        memory:128,
        price:500
    },
    {
        memory:256,
        price:700
    }
    ]

let price=0;
while (true){
let mem = prompt ("Какой размер памяти Вам нужен? 64 или 128 или 256", " ");
console.log (mem);
console.log(NaN === NaN);
if (mem === null){
    break;
    }
if (!+mem) {
  console.log("Неккоректный ввод");
  alert("Вы ничего не ввели или ввели строку ");
 
} else {
    for(let i=0;i<memories.length; i++){
        if(+mem===memories[i].memory){
        price = memories[i].price;
        //    } else {
            // alert("выберите один из 3 вариантов 64, 128, 256");
          }
       }
    break;
}
   
}
while (price){
    let color = prompt ("Какой цвет телефона вас интересует? \n    \nБелый(White) \nЧерный(Black) \nЗеленый(Green) \nКрасный(Red) \nЖелтый(Yellow) \nПурпурный(Purple)",);
    if (color === null){
        break;
    }
    if (color==="Белый"  || color==="White"){
            imageUrl = "White.png";
            } else if (color==="Черный" || color==="Black" ){
                imageUrl = "Black.png";
              } else if (color==="Зеленый" || color==="Green"){
                imageUrl = "Green.png";
                } else if (color==="Красный" || color==="Red"){
                    imageUrl = "Red.png";
                } else if (color==="Желтый" || color==="Yellow"){
                    imageUrl = "Yellow.png";
                }  else if (color==="Пурпурный" || color==="Purple"){
                    imageUrl = "Purple.png";
                } else{
                    alert("У нас нет такого телефона");
                }
        break;
}
document.write(`<img src="img/${imageUrl}"  alt=>` + '  Его цена: ' + price + '$');



// 3) Цена телеофна зависит не только от памяти, но и от цвета
// 64gb silver - 300
// 64gb black - 300 + наценка за цвет(3$)
// Используйте массивы для хранения ВСЕХ ПАМЯТЕЙ и ЦВЕТОВ
// let memories = [64,128,256]

// посмотреть методы массивов

