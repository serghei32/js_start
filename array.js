// let grade0 = 1;
// let grade1 = 12;
// let grade2 = 13;
// let grade3 = 14;
// let grade4 = 15;
//
//
// let grades = [5, 5, 4, 9];
//
// document.write(grades[0]); //в квадратных скобках указываем порядковый номер эллемента который хотим дастать
//
//
// let extratedGrade = grades[0];
// document.write(extratedGrade)
//
//
// let book = ['мастер и маргарита', "война и мир", "Call of duty"]; // создание масива как и обькта идет через переменную = [];
//
// let myFirstBook = book[2]; //создали пременнную ссылавшуюся на номер в очереди массива те calla of duty.
// document.write(myFirstBook)

//------------------------------------------------------------------------------
// let movies = [
//
//     // отобразиться этот обьект как масив [..]
//     {
//         name: "В поисках Немо",
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Альберт Брукс", "Эллен Дедженерес",
//             "Александр Гоулд"],
//         format: "DVD"
//     },
//
//     {
//         name: "Звездные войны ",
//         releaseDate: 2013,
//         duration: 120,
//         actors: " alipachino",
//         format: "DVD"
//     },
//
//     {
//         name: "хоббит",
//         releaseDate: 2023,
//         duration: 140,
//         actors: "deni devito",
//         format: "DVD"
//     },
//
//     {
//         name: "vlastelin",
//         releaseDate: 2224,
//         duration: 420,
//         actors: ["dikaprio"],
//         format: "hd"
//     }
// ];
//
// document.write(movies)

//-----------------------------------------------------------------------

// const pets = ['cat', 'dog', 'chiken', 'rat']
// pets[0]='goat';
//
// document.write(pets)
//-----------------------------------------------------------------------

// const random = Math.floor(Math.random() * 300 + 3);
// document.write(random)

// function randomPrase() {
//     const word1 = ['The dog', 'the cat', 'the rat'];
//     const word2 = ['like to eat', 'want to say', 'always looking for'];
//     const word3 = ['the born', 'the bread', 'the cheese'];
//
//     const randomIndex1 = Math.floor(Math.random() * word1.length); // генерирует случайное число из масива
//     const randomIndex2 = Math.floor(Math.random() * word1.length); // генерирует случайное число из масива
//     const randomIndex3 = Math.floor(Math.random() * word1.length); // генерирует случайное число из масива
//
//
//     const prase = word1[randomIndex1] + ' ' + word2[randomIndex2] + ' ' + word3[randomIndex3];
//     document.write(prase);
// };
//
// randomPrase();
//---------------------------------------------------------


// var dinosaurs =
//     [
//         "Тираннозавр ",
//         "Велоцираптор ",
//         "Стегозавр ",
//         "Трицератопс ",
//         "Брахиозавр ",
//         "Птеранодон ",
//         "Ап тозавр ",
//         "Диплодок ",
//         "Компсогнат "
//     ];
// const randomNum = Math.floor(Math.random() * dinosaurs.length)
// dinosaurs.push('kot');
// dinosaurs.pop()
// alert(dinosaurs)


// document.write(dinosaurs);
// document.write(dinosaurs[randomNum]);

// function randomWord(array){
//     const randomNumber = Math.floor(Math.random()*array.length);
//     return array[randomNumber];
// }
//
// function makeMeaning() {
//     const word1 = ['The dog', 'the cat', 'the rat'];
//     const word2 = ['like to eat', 'want to say', 'always looking for'];
//     const word3 = ['the born', 'the bread', 'the cheese'];
//
//
//     const randomNum1 = Math.floor(Math.random() * 3);
//     const randomNum2 = Math.floor(Math.random() * 3);
//     const randomNum3 = Math.floor(Math.random() * 3);
//
//     const phraseMaker = word1[randomNum1] + ' ' + word2[randomNum2] + ' ' + word3[randomNum3]
//
//     return phraseMaker;
//
// }
//
// makeMeaning(); // я не увижу результат этой ф-и тк в ней нет самой не пописан ни alert ни document.write/ nt a-z .
// // те ф-я срабатывает но не выводиться.
// // const result = makeMeaning()
// // alert(makeMeaning())


// function makeMeaning() {
//     const word1 = ['The dog', 'the cat', 'the rat'];
//     const word2 = ['like to eat', 'want to say', 'always looking for'];
//     const word3 = ['the born', 'the bread', 'the cheese'];
//
//     function randomWord(array) { // ф-я примет аргумент масива который попадет туда когда я буду вытаскивать его   в return на 3 строке ф-и **
//
//         const randomNumber = Math.floor(Math.random() * array.length);
//         return array[randomNumber]; // здесь я вытаскиваю аргумент ф-и который присваивал (масив) и засовываю в этот масив что хочу.
//
//     }
//
//     const result = randomWord(word1) + ' ' + randomWord(word2) + ' ' + randomWord(word3); //создав переменную я
//     // подставляю туда функции в которой есть аргумент word1 word2 word3
//     return result;
// // }
// //
// // alert(makeMeaning())
//--------------------------------------------------------------


// function phrase() {
//     const word1 = ['i wont', 'she wonts', 'they wont']
//     const word2 = ['to eat', 'to dreenk', 'to sea']
//     const word3 = ['the icecream', 'the apple', 'the bread']
//
//
//     function ranNum(array) {
//         let randomNum = Math.floor(Math.random() * array.length);
//         return array[randomNum]
//     }
//
//
//     const makeMeaning = ranNum(word1) +' '+ranNum(word2) +' '+ranNum(word3);
//     return makeMeaning;
// }
//
// alert(phrase())


// const word1 = ['i wont', 'she wonts', 'they wont']    //  это масив обьявленный через переменную
// const word2 = ['to eat', 'to dreenk', 'to sea']  //  это масив обьявленный через переменную
// const word3 = ['the icecream', 'the apple', 'the bread']  //  это масив обьявленный через переменную
//
// const randomNum1 = Math.floor(Math.random() * word1.length);
// const randomNum2 = Math.floor(Math.random() * word2.length);
// const randomNum3 = Math.floor(Math.random() * word3.length);
//
//
// const prase = word1[randomNum1] + ' ' + word2[randomNum2] + ' ' + word3[randomNum3];
// alert(prase)


// function prase() {
const word1 = ['i wont', 'she wonts', 'they wont']    //  это масив обьявленный через переменную
const word2 = ['to eat', 'to dreenk', 'to sea']  //  это масив обьявленный через переменную
const word3 = ['the icecream', 'the apple', 'the bread']  //  это масив обьявленный через переменную

word1.push('they dont wont to000');
word2.unshift('to rest')
word3.shift();
let removeWord3 = word3.pop();
alert(removeWord3);

const word4 = word1.concat(word2, word3);
const word5 = word4.join(' - ')
document.write(word5)


function makeNum(array) {
    const randomNum = Math.floor(Math.random() * array.length)
    return array[randomNum];
}

const result = makeNum(word1) + ' ' + makeNum(word2) + ' ' + makeNum(word3);
return result;
}

alert(prase())

















