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
function salary() 
{
    let userSalary = parseInt(prompt("Напишите вашу зарплату"));
    if (isFinite(userSalary) === true)
{
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
arr.splice(3,2) 
console.log(arr)

console.log("Дз 4. Задание 3")
const myArray = [];
for (let index = 0; index < 5; index++) {
let value = Math.floor((Math.random()*9));
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

 */
console.log("Дз 5. Задание 1")
//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
const numbers = 
{
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }
for(value in numbers){
if(numbers[value]>=3)
{
    console.log(numbers[value])
}
}
console.log("Дз 5. Задание 2")
//Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
//
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2, // вывести это число
    },
    },
    {
    userId: 5, // вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", // вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1,
    },
    },
    ],
    };
    console.log(post.author,",",post.comments[0].rating.dislikes,",",post.comments[1].userId,",",post.comments[1].text);
    
    console.log("Дз 5. Задание 3")
    // Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

    const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
    ];
    products.forEach(element => {
        element.price = element.price - element.price * 0.15
    })
    console.log(products)


    console.log("Дз 5. Задание 5")
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    //const newarray = en.concat(ru);
    //console.log(newarray);
    function together(en, ru){
    let result = {};
    en.forEach((i, j) => {result[i] = ru[j]})
    return result;
    }
    console.log(together(en,ru))
    