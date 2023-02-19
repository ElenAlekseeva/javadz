/*console.log("Задание 1");
let celsius= 3;
let result = (9 / 5) * celsius + 32;
console.log(result);

console.log("Задание 2");
let names = "Elena";
let admin = "Администратор:" + names;
console.log(admin);

console.log("Дз 3 . Задание 1")
let number = parseInt(prompt("Введите число"));
function cube(num) 
{result = Math.pow(num, 3)
return console.log(`${num}^3=${result}`)
}
cube(number)

console.log("Дз 3. Задание 2")
function salary() {
 let userSalary = parseInt(prompt("Напишите вашу зарплату"));
 if (isFinite(userSalary) === true){
 let result = userSalary - userSalary * 0.13;
 return console.log(`Ваша зарплата после вычета налога равна ${result}`)
 }
 return console.log(`Ошибка ${userSalary}`)
 }
salary()

console.log("Дз 3. Задание 3")
let num1 = parseInt(prompt("Введите первое число"));
let num2 = parseInt(prompt("Введите второе число"));
let num3 = parseInt(prompt("Введите третье число"));

function compareNumber(num1, num2, num3) {
let max = Math.max(num1, num2, num3)
console.log(`Большее число ${max}`)
}
compareNumber(num1, num2, num3)
*/
console.log("Дз 4. Задание 1")
let size = 11;
for (let index = 0; index < size; index++) {
if (index === 0) {
console.log(`${index} - это ноль`)
} else if (index % 2 === 0){
    console.log(`${index} - чётное число`)
} else {
console.log(`${index} - нечётное число`)
}
}

console.log("Дз 4. Задание 2")
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2) 
console.log(arr)

console.log("Дз 4. Задание 3")
const myArray = [];
for (let index = 0; index < 5; index++) {
let value = Math.floor((Math.random() * 9));
myArray[index] = value
}
console.log(myArray)
console.log("Сумма чисел")
let sum = 0 
for (let index = 0; index < myArray.length; index++) {
sum = sum + myArray[index]
}
console.log(`${sum} `)
console.log("Наименьшее число в массиве")
let minValue = myArray[0];
for (let index = 0; index < myArray.length; index++) {
if (myArray[index] < minValue) {
minValue = myArray[index]
 }
}
console.log(`${minValue}`)
console.log("Поиск числа 3")
for (let index = 0; index < myArray.length; index++) {
if (myArray[index] === 3){
console.log(`число 3 находится на позиции ${index + 1}`)
 }
 }