//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const userInput = prompt("Какое официальное название JavaScript?")
// let message = "Не знаете? ECMAScript!"
// if (userInput === "ECMAScript") {
// 	message = "Верно!";
// }
// const message = userInput === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!";
// console.log(message);


//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const userInput = 70;
// const hours = Math.floor(userInput / 60) ;
// const minuts = userInput % 60;
// const modifHours = String(hours).padStart(2, 0);
// const modifMinuts = String(minuts).padStart(2, 0);
// console.log(modifHours + ':' + modifMinuts);

// console.log(`${modifHours}:${modifMinuts}`);

