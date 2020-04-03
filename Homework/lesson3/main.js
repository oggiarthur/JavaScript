
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
let arr = [];
n=5;
let generator = function(start=0, step = 1) {
    return function() {
    start+=step;
    return start;
  };
};


let sequence = generator(+start,+step);
console.log(sequence());
console.log(sequence());
console.log(sequence());
console.log(sequence());
console.log ('---------')

let gen = function (sequence,n){
    for (let i=0; i<n;i++){
       arr=arr.push(sequence);
       return arr;
    }

}

let take= gen(sequence(),n);
console.log(take());