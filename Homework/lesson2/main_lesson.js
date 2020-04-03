
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

// let memories =[
//     {
//         memory:64,
//         price:300
//     },
//     {
//         memory:128,
//         price:500
//     },
//     {
//         memory:256,
//         price:700
//     }
//     ]

// let price=0;
// while (true){
// let mem = prompt ("Какой размер памяти Вам нужен? 64 или 128 или 256", " ");
// console.log (mem);
// console.log(NaN === NaN);
// if (mem === null){
//     break;
//     }
// if (!+mem) {
//   console.log("Неккоректный ввод");
//   alert("Вы ничего не ввели или ввели строку ");
 
// } else if (+mem===64||+mem===128||+mem===256){
//     for(let i=0;i<memories.length; i++){
//         if(+mem===memories[i].memory){
//         price = memories[i].price;
//         break;
//          }
//        }
//     break;
//    } else {
//     alert("выберите один из 3 вариантов 64, 128, 256"); 
//    }
// }

// while (price){
//     let color = prompt ("Какой цвет телефона вас интересует? \n    \nБелый(White) \nЧерный(Black) \nЗеленый(Green) \nКрасный(Red) \nЖелтый(Yellow) \nПурпурный(Purple)",);
//     if (color === null){
//         break;
//     }
//     if (color==="Белый"  || color==="White"){
//             imageUrl = "White.png";
//             } else if (color==="Черный" || color==="Black" ){
//                 imageUrl = "Black.png";
//               } else if (color==="Зеленый" || color==="Green"){
//                 imageUrl = "Green.png";
//                 } else if (color==="Красный" || color==="Red"){
//                     imageUrl = "Red.png";
//                 } else if (color==="Желтый" || color==="Yellow"){
//                     imageUrl = "Yellow.png";
//                 }  else if (color==="Пурпурный" || color==="Purple"){
//                     imageUrl = "Purple.png";
//                 } else{
//                     alert("У нас нет такого телефона");
//                 }
//         break;
// }
// document.write(`<img src="img/${imageUrl}"  alt=>` + '  Его цена: ' + price + '$');



// 3) Цена телеофна зависит не только от памяти, но и от цвета
// 64gb silver - 300
// 64gb black - 300 + наценка за цвет(3$)
// Используйте массивы для хранения ВСЕХ ПАМЯТЕЙ и ЦВЕТОВ
// let memories = [64,128,256]

// посмотреть методы массивов

let phones =[
    {
        color:"White",
        image:"White.png",
        price:0

    },
    {
        color:"white",
        image:"White.png",
        price:0
    },
    {
        color:"Белый",
        image:"White.png",
        price:0
    },
    {
        color:"Black",
        image:"Black.png",
        price:3

    },
    {
        color:"black",
        image:"Black.png",
        price:3

    },
    {
        color:"Черный",
        image:"Black.png",
        price:3

    },
    {
        color:"Green",
        image:"Green.png",
        price:6

    },
    {
        color:"green",
        image:"Green.png",
        price:6

    },
    {
        color:"Зеленый",
        image:"Green.png",
        price:6

    },
    {
        color:"Red",
        image:"Red.png",
        price:9

    },
    {
        color:"red",
        image:"Red.png",
        price:9

    },
    {
        color:"Красный",
        image:"Red.png",
        price:9

    },
    {
        color:"Yellow",
        image:"Yellow.png",
        price:12

    },
    {
        color:"yellow",
        image:"Yellow.png",
        price:12

    },
    {
        color:"Желтый",
        image:"Yellow.png",
        price:12

    },
    {
        color:"Purple",
        image:"Purple.png",
        price:15

    },
    {
        color:"purple",
        image:"Purple.png",
        price:15

    },
    {
        color:"Пурпурный",
        image:"Purple.png",
        price:15

    }
    ]
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
        
        
       memory: while (true){
        let mem = prompt ("Какой размер памяти Вам нужен? 64 или 128 или 256", " ");
        console.log (mem);
        console.log(NaN === NaN);
        if (mem === null){
            break;
            }
        if (!+mem) {
          console.log("Неккоректный ввод");
          alert("Вы ничего не ввели или ввели строку ");
        }

        for(let i=0;i<memories.length; i++){
                if(+mem===memories[i].memory){
                price = memories[i].price;
                break memory;
            }
            
            
        }
    } 
       color: while (price){
            let color = prompt ("Какой цвет телефона вас интересует? \n    \nБелый(White) \nЧерный(Black) \nЗеленый(Green) \nКрасный(Red) \nЖелтый(Yellow) \nПурпурный(Purple)",);
            if (color === null){
                break;
            }
            
            for(let j=0;j<phones.length; j++){
                if(color===phones[j].color){
                imageUrl= phones[j].image;
                price += phones[j].price;
                console.log(price);
                break color;
                } 
            }
        }    
            
    if (price) {
      document.write(`<h1>Price: ${price}$</h1>`);
     }
    if (imageUrl) {
      document.write(`<img src="img/${imageUrl}">`);
    }
    if (!price && !imageUrl) {
      document.write(`<h1>ПОКА!</h1>`);
    }




                
        
       
        