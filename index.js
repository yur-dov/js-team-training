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

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные чисела от min до max

// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 !== 0) {
//         continue;
        
        
//     } total += i;
    
    
// } console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введіть логін");


// console.log(loginInput);

// switch (loginInput) {
//     case "Admin":
//         const passInput = prompt('Введіть пароль');
//         switch (passInput) {
//             case "Я главный":
//                 console.log("Здраствуйте");
//                 break;
//             case null:
//                 console.log("Отменено");
//                 break;
//             default: console.log("Неверный пароль!");
                


//         }
            
        
//         break;
//     case null:
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }

// if (loginInput === "Admin") {
//     const passInput = prompt('Введіть пароль');
//     if (passInput === "Я главный") {
//         console.log("Здраствуйте");
//     } else if (passInput === null) {
//         console.log("Отменено");
        
//     } else {
//         console.log("Неверный пароль!");
//     }

// } else if (loginInput === null) {
//     console.log("Отменено")
    
// } else {
//     console.log("Я вас не знаю")
    
// }


//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.


// let total = 0;
// let userInput = prompt('введіть число');
// while(userInput) {
//     total += Number(userInput);
//     userInput = prompt('введіть число');
    
// }
// console.log(total);

// let check = false;
// do{
//     if (userInput){
//         check = true;
//         total += Number(userInput);
//         userInput = prompt('введіть число');
//     } else {
//         check = false;
//         console.log(`Общая сумма введенных чисел равна ${total}.`);
//     }
// } while(check);