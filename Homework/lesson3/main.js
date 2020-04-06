
// Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, 
// которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, 
// задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. 
// Генераторов можно создать сколько угодно.

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

let start = prompt ("Please enter start number");
let step = prompt ("Please enter step value");
if (start===null||step===null){
    alert ("Bye!");
    } 
let sequence = function(start, step) {
   if (!isNaN(start||step)){
       if (!+start){
           start=0;
       }
       if (!+step){
           step=1;
       }
        return function() {   
         start+=step;
            return start-step;
        } 
    }
    return alert("You have enetred a string");
    };
    

let generator = sequence(+start,+step);
let generator2 = sequence(+start,+step);
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log ('---------')


if (generator2){
let n = prompt ("Please enter length of array")||1;
let take = function (generator2,n){
    let arr=[];
    for (let i=0; i<n;i++){
       arr.push(generator2());
       }
       return arr;  
}

console.log(take(generator2,n));
}