console.log("Задание 1");
let celsius= 3;
let result = (9 / 5) * celsius + 32;
console.log(result);

console.log("Задание 2");
let names = "Elena";
let admin = "Администратор:" + names;
console.log(admin);

console.log("Дз 3 . Задание 1")
let number = parseInt(prompt("Введите число"))
function cube(num) 
{result = Math.pow(num, 3)
return console.log(`${num}^3=${result}`)
}
cube(number)

console.log("Дз 3. Задание 2")
function salary() {
 let userSalary = parseInt(prompt("Напишите вашу зарплату"))
 if (isFinite(userSalary) === true){
 let result = userSalary - userSalary * 0.13
 return console.log(`Ваша зарплата после вычета налога равна ${result}`)
 }
 return console.log(`Ошибка ${userSalary}`)
 }
salary()

console.log("Дз 3. Задание 3")
let num1 = parseInt(prompt("Введите первое число"))
let num2 = parseInt(prompt("Введите второе число"))
let num3 = parseInt(prompt("Введите третье число"))

function compareNumber(num1, num2, num3) {
let max = Math.max(num1, num2, num3)
console.log(`Большее число ${max}`)
}
compareNumber(num1, num2, num3)
