// const friendName = 'Alex';
// let masha = 30;
// alert("privet" + friendName);

// const price = 80;
// const discount = 20;
// const total = price - (price * discount / 100);
//
//
// if(total>=90) {
//     alert("ne berem")
// }
// else if(total <80) {
//     alert("daite dva")
// }
// else {
//     alert("berem 1")
// }
//

// const cost = 70;
// const disc = 10;
// const total = cost - (cost * disc / 100)
//
// if(total<=0){
//     alert("hellow world")
// }
// else if(total>50){
//     alert("neznau")
// }
// else {
//      alert("berem 1")
//  }

//
// let sum = +prompt("укажите стартовую сумму:");
// const persent = 15;
// const result = 1500;
// let count = 0;
// const depositTerm = +prompt("Укажите срок депозита", 10)
//
//
// while (count <= depositTerm) {
//     sum = sum + sum * (persent / 100)
//     count = count + 1
//     document.write(count + ':' + sum + "<br>")
// }


// let sum = +prompt('укажите стартовую сумму', );
// const persent = +prompt('укажите желаемый процент', );
// const resolt = 2000;
// let count = 0;
//
// const depositTerm = +prompt('укажите срок депозита', )
//
// while (count < depositTerm) { // пока count меньше depositTerms запусти ф-ю
//     sum = sum + sum * (persent / 100) // вычесления суммы
//     count = count + 1 // включаем счетчик
//     // alert(sum) // выводим в алерт  сумму
//     document.write(sum)
//
// }
// console.log(sum, count)


// let sum = +prompt('укажите стартовую сумму',);
// const persent = +prompt('укажите желаемый процент',);
// const resolt = 2000;
// let count = 0;
//
// const depositTerm = +prompt('укажите срок депозита',)
//
// while (count < depositTerm) { // пока count меньше depositTerms запусти ф-ю
//     sum = sum + sum * (persent / 100) // вычесления суммы
//     // alert(sum) // выводим в алерт  сумму
//     count = count + 1 // включаем счетчик
//     document.write(count + ' ' + sum + "<br>")
//
// }
// console.log(sum, count)


// const badprise = +prompt("цена кровати:" )
// const

// let myName = 'alex';
// let myName = "bob";

// console.log(count)
// console.log(sum)

// // позиция корабля
// const location1 = 3;
// const location2 = 4;
// const location3 = 5;
//
// //добавляем счетчик попаданий
// let hits = 0;
// let isSunk = false; //позиция корабля. корабль не потоплен, а исходно он не потоплен tk = false
// let guess;
//
// while (isSunk === false) {
//     guess = +prompt("enter a number ") // превращаем строку в число
//     if (guess === location1 || guess === location2 || guess === location3) {
//         alert("ti popal")
//         hits = hits + 1
//         if (hits === 3){
//             isSunk = true
//             alert('korabl podbit')
//         }
//
//             } else {
//         alert("ti promazal")
//     }
//
// }

// const inStock = true;
// const inSale = true;
// const prise = 100;
//
// if (inStock === true && (inSale === true || prise < 80)) {
//     alert("sdss")
// } else {
//     alert("none")
// }


// const temp = 83;
// const willrain = true;
// const humid = (willrain && temp > 80)
// console.log(humid)

//-----------------------------------------------

// const depositAmount = 1000;
// const yearlyRate = 15;
// const depositTermsInYear = 2;
// //
// let depositIncome = 0;  // сумма дохода
// let count = 0;
//
// while (count < depositTermsInYear) {
//     depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
//     count = count + 1
//     alert(depositIncome)
// }
//
//
// function getDepositIncome(amount, rate, term) {
//     while (count < depositTermsInYear) {
//         depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
//         count = count + 1
//         document.write(amount)
//     }
//     return depositIncome
// }
//
// getDepositIncome(depositAmount, yearlyRate, depositTermsInYear)


//------------------------------------------------
// function getSum(a, b, c) {
//     const old = a + b + c;
//     return old;
//
// }
// const show= getSum(10, 20,30)
//
// document.write(show)


//--------------------------------------------

// function getGreeting(userName, namekompany) {
//     return "hellow "+userName+". Welcome to "+namekompany+""
//
// }
//
//
// const massage = getGreeting('Serghei', 'Sibcon')
// document.write(massage)


//----------------------------------------------------------

// function bla(name, weight) {  // v nee doljna priiti porametr ab - ldlia etogo nado napisat funkciu i ukazat nujnii
//     if (weight > 30) {
//         document.write(name + " sobaka govorit ale");
//     } else if (weight < 30) {
//         document.write(name + " sobaka molchit");
//     }
// }
//-------------------------------------------------------------------


// bla("kuza", 20);

// const a = +prompt('укажите значение')

// function getDepositIncome(amount, rate, term) {
//     while (count < depositTermsInYear) {
//         depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
//         count = count + 1
//         document.write(amount)
//     }
//     return depositIncome

//-------------------------------------

// function makeTea (cup, tea) {
//     document.write('завари ' + cup +' чашек чая '+ tea)
// }
//
// makeTea()

//-------------------------------------
//
// const myAge = +prompt("vvedite svoi vozrast");
// const myName = prompt("vvedite svoi imia ");
//
// function bla(a, b) {
//     if (a >= 30) {
//         document.write("ja uje starii ")
//     } else if (a < 30) {
//         document.write("ja molod ")
//         document.write("i menia zovut " + b)
//     }
// }
//
// bla(myAge, myName)


//----------------------------------------------------------
// const depositAmount = 1000;
// const yearlyRate = 15;
// const depositTermsInYear = 2;
// //
// let depositIncome = 0;  // сумма дохода
// let count = 0;
//
// while (count < depositTermsInYear) {
//     depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
//     count = count + 1
//     alert(depositIncome)
// }
//
//
// function getDepositIncome(amount, rate, term) {
//     while (count < depositTermsInYear) {
//         depositIncome = depositIncome + depositAmount * (yearlyRate / 100)
//         count = count + 1
//         document.write(amount)
//     }
//     return depositIncome
// }
//
// getDepositIncome(depositAmount, yearlyRate, depositTermsInYear)


/////----------------------------------------------


// const scores = [20, 30, 40, 50];
// console.log(scores[2])
//
// const pets = ['dog', 'cat', 'rat']
// document.write(pets[2])

//----------------------------------------------------
// function double(number) {
//     document.write(number)
//     alert(' your number is ' + number)
// };
//
// let setDate = +prompt("vvediiii chislo");
//
// double(setDate);

//-------------------------------------------------------

// var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
// var pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };

//--------------------------------------------------------


// const article = "lorem1000000000000000"
// // const image = <img src="tumba.png" alt="foto"/>
// const description = "sdsjdsdklsjdlksjdslkdlkslslklklklk"
//
//
// document.write("<h1>", "privetsdsd", "</h1>")
// document.write("<h2>", article, "</h2>")
// document.write("<img src='tumba.png' width=400px/> ")
// document.write("<p>", description , "</p>")
// document.write(description)

//----------------------------------
// let count = 0;
//
// function privet() {
//     alert("wassap")
//     count = count + 1;
//     document.write(count + count)
// }


//
//
// const word0 = "wasup"
// const word0tarnslate = "kak dela"
//
// let word2 = "old";
// let word2translate = "starii";
//
// let word3 = "cat";
// let word3translate = "koshka";
//
// let rightAnsver = 0;
// let count = 0;
// let minAnsver = 50;
//
//
//
// let yourInput1 = prompt(word0)
// alert(yourInput1 === word0tarnslate)
// if (word0 === yourInput1) {
//     count = count + 1;
// }
//
// let yourInput2 = prompt(word2)
// alert(word2 === word2translate)
// if (word2 === yourInput2) {
//     count = count + 1;
// }
//
// let yourInput3 = prompt(word3)
// alert(word3 === word3translate)
// if (word3 === yourInput3) {
//     count = count + 1;
// }
//
//
// if (count > minAnsver) {
//     alert('Ti krasava')
// } else {
//     alert('ti urod')
// }


//----------------------------------

// let word0 = "wasup"
// let word0tarnslate = "kak dela"
//
// let word1 = "bye"
// let word1tarnslate = "poka"
//
// let word2 = "programmer"
// let word2tarnslate = "programmistttt"
//
// let finishmassege = "molodec"
// let unfinishmassege = "ne molodec"
// let correctAnsver = 0;
// let wordsCount = 3;
//
// let userAnsver0 = prompt(word0, "kak dela");
// document.write(userAnsver0 === word0tarnslate, '<br>');
// if (userAnsver0 === word0tarnslate) {
//     correctAnsver = correctAnsver + 1;
// }
//
// let userAnsver1 = prompt(word1); // присваиваю переменную ф-и prompt, где  prompt имеет значение переменной word1
// document.write(userAnsver1 === word1tarnslate, '<br>'); // дальше по очереди срабатывает ф-я document.write в которой
// if (userAnsver1 === word0tarnslate) {
//     correctAnsver = correctAnsver + 1;
// }
//
// let userAnsver2 = prompt(word2);
// document.write(userAnsver2 === word2tarnslate);
// if (userAnsver2 === word2tarnslate) {
//     correctAnsver = correctAnsver + 1;
// }
//
// debugger
// let minCorrectAnsver = 50;
// let userCorectAnsverPercent = correctAnsver / wordsCount * 100;
//
// if (userCorectAnsverPercent > minCorrectAnsver) {
//     alert(finishmassege)
// } else {
//     alert(unfinishmassege)
// }
//----------------------------------


// document.write('start', '<br>');
// let chislo = +prompt("skolko tebe godikov ?", 15)
// if(chislo>18){
//     document.write('ti sovershennoletnii');
// }else{
//     prompt("maloi eshe")
// }


//------------------------------------------- ----------------------------------------------------------------

// let productPrise = prompt('stoimost produkta:', 10);
// const balance = 100;
//
// const price = Number(productPrise)
// let ostatok1 = 0;
// if (isNaN(productPrise)) {  // фу-я говорит что если то что в скобка не является числом то(те дает true)
//     alert("Введи валидное значение")
//
// } else {
//     if
//     (balance >= price) {
//         alert("you can bye that");
//         ostatok1 = balance - price;
//         alert("ostatochnaia summa:" + ostatok1)
//     } else
//         alert("Ditt kop ar forbjudet !")
//     {
//
//     }
//     let productPrise2 = +prompt('vvedi 2 summu 2 pokupki:');
//
//     let ostatok2 = ostatok1 - productPrise2;
//
//     if (ostatok2 >= productPrise2) {
//         alert("you can bye that again");
//         alert("ostatochnaia summa:" + ostatok2)
//     } else {
//         alert("Dittt kop ar forbjudet !")
//     }
//
//     let productPrise3 = +prompt('vvedi 3 summu 3 pokupki:');
//     let ostatok3 = ostatok2 - productPrise3;
//
//     if (ostatok3 >= productPrise3) {
//         alert("you can bye that again");
//         alert("ostatochnaia summa:" + ostatok3)
//     } else {
//         alert("Dittt kop ar forbjudet !")
//     }
//
//     alert('Tvoi balans raven:' + ostatok3)
// }

//------------------------------------------- ----------------------------------------------------------------

// let myConsole = {
//     name: "serghei",
//     age: 35,
// }
// myConsole.name = "Dmitrii"
//
//
// const dator1 = {
//     name: "macbook",
//     memory: 32,
//     age:10,
// }
//
// const dator2 = {
//     name: "asus",
//     memory: 65,
//     age:5,
// }
//
//
// const transfer ={
//     from: "Indiya",
//     to:"moldova",
//     volume:100,
//     factory:{
//         adress:"China",
//         contact:345678,
//         title:"assus"
//     }
//
// }
//
// document.write(transfer.factory.adress)
//------------------------------------------- ----------------------------------------------------------------

const word0 = {
    original: "wassap",
    translate: "kak dela"
}

const word1 = {
    original: "dog",
    translate: "sobaka"
}

const word2 = {
    original: "cat",
    translate: "koshka"
}

const resoultMessage = {
    finishSuccess: "molodec",
    finishUnSuccess: "ne molodec"
}

const result = {
let correctAnsver = 0;
}


let minCorrectAnsver = 50;
let wordsCount = 3;




let userAnsver0 = prompt(word0.original);
document.write(userAnsver0 === word0.translate, '<br>');
if (userAnsver0 === word0.translate) {
    result.correctAnsver = result.correctAnsver + 1;
}

let userAnsver1 = prompt(word1.original); // присваиваю переменную ф-и prompt, где  prompt имеет значение переменной word1
document.write(userAnsver1 === word1.translate, '<br>'); // дальше по очереди срабатывает ф-я document.write в которой
if (userAnsver1 === word1.translate) {
    result.correctAnsver = result.correctAnsver + 1;
}

let userAnsver2 = prompt(word2.original);
document.write(userAnsver2 === word2.translate);
if (userAnsver2 === word2.translate) {
    result.correctAnsver = result.correctAnsver + 1;
}

debugger
let userCorectAnsverPercent = correctAnsver / wordsCount * 100;

if (userCorectAnsverPercent > minCorrectAnsver) {
    alert(finishmassege)
} else {
    alert(unfinishmassege)
}





























