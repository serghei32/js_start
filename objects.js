//
// let tools = {
//     festool700: true,
//     festool500: false,
//     maffelDD50: true,
//     fraser: true,
//     laser: true,
//     "хоббит": {
//         releaseDate: 2024,
//         duration: 320,
//         actors: ["deni devito"],
//         format: null
//     },
//     "planer kotorii rabotaet ": {    //обьект завернут в другой обьект - добавление подобьекта
//         name:"dictum",
//         lenght:38,
//         age:1,
//         prodused:"canada"
//     }
// }
//
//
// tools.festool500 = true;
//
//
// tools.veritas = 3;
//

// let vivod = tools["planer kotorii rabotaet "];
// document.write(vivod.prodused);
//-------------------------------масив обьектов------------------------------------

// const dinosaurs = [
//     {name: "Тираннозавр рекс", period: "Верхнемеловой"},
//     {name: "Стегозавр", period: "Верхнеюрский"},
//     {name: "Платеозавр", period: "Триасовый"}
// ];
// console.log(dinosaurs[0]);

//-------------------------------масив друзей----------------------------------------
// let anna = {
//     name: "Anna",
//     age: 32,
//     luckyNumber: [1, 2, 3,]
// };
//
// let danil = {
//     name: "Daniil",
//     age: 32,
//     luckyNumber: [11, 22, 34,]
// };
// let serg = {
//     name: "Serghei",
//     age: 40,
//     luckyNumber: [13, 22, 32,]
// };

// Итак, в переменной friends находится массив с тремя элементами:
// anna, dave и kate (каждый из них является объектом).
// let friends = [anna, danil, serg]
// Мы можем полчить любой из объектов по его индексу в массиве:
// console.log(friends[1]);
//Также мы можем получить значение, хранящееся
// в объекте, указав индекс объекта в квадратных скобках, поставив точку
// и написав соответствующий ключ:
// console.log(friends[1].luckyNumber[0]);


//-----------------------------Учет долгов------------------
// let owedMoney = {}; // создаем пустой обьект
// owedMoney.Anna = 3;  // присваиваем этому обьекту 1 новое значение
// owedMoney.Dannil = 2.// присваиваем этому обьекту 2 новое значение
// Object.keys(owedMoney)
//
// const keys = Object.keys(owedMoney); //присваиваем переменную 'keys' k команде object.keys()
// document.write(keys);
// console.log(keys);

//-----------------------------------------------------------------

let movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес",
            "Александр Гоулд"],
        format: "DVD"
    },

    "Звездные войны ": {
        releaseDate: 2013,
        duration: 120,
        actors: [" alipachino"],
        format: "mp4"
    },

    "хоббит": {
        releaseDate: 2024,
        duration: 320,
        actors: ["deni devito"],
        format: null
    },
}


let vlastelin = {
    releaseDate: 2224,
    duration: 420,
    actors: ["dikaprio"],
    format: "hd"
}

movies["властелин колец"] = vlastelin;


//
const findNemo = Object.keys(movies);
// document.write(findNemo.duration)
document.write(findNemo)


const tools = {
    shaper: {
        marke: "makita",
        power: 1000
    },
    slipmaskin: {
        marke: "dewalt",
        power: 500
    }
}


tools.kapsag = "festool";



let key = Object.keys(tools)
alert(key)


















