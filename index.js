// console.log("Hello")

// window.alert("This is an alert")
// this is a comment

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myParagraph").innerText = ("i like pizza")

// let x;
// x = 100;
// let price = 10.99;
// let firstName = "John";
// let online = true

// console.log(typeof price)
// console.log(x)
// console.log(`The price is $${price}`)
// console.log(typeof firstName)
// console.log(`Your name is ${firstName}`)
// console.log(typeof online)

let fullName = "Bliss mal"
let age = 24
let isStudent = false

document.getElementById("p1").textContent = `Your name is ${fullName}`
document.getElementById("p2").textContent = `You are ${age} years old`
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`

let students = 30
// students = students + 1 / students += 1 / students ++
// students = students - 1 / students -= 1 / students --
// students = students * 2
// students = students / 2
// students = students ** 2
// students = students % 3

// Accepting usr inputs
// 1. Window prompt
// 2. Html input field

// let username;
// username = window.prompt("What is your username!")
// console.log(username)
let username

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("text").value
    username = String(username)
    document.getElementById("myH1").textContent = `Hello ${username}`
}

// let age1 = window.prompt("How old are you")
// age1 = Number(age1)
// age1 += 1
// document.getElementById("myH1").textContent = age1

const PI = 3.142
let radius
let circumference

document.getElementById("mySubmit1").onclick = function () {
    radius = document.getElementById("radius").value
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("circumference").textContent = circumference;
}

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel")

let count = 0

increaseBtn.onclick = function () {
    count++
    countLabel.textContent = count
}

decreaseBtn.onclick = function () {
    count--
    countLabel.textContent = count
}

resetBtn.onclick = function () {
    count = 0
    countLabel.textContent = count
}

let randomNum = Math.floor(Math.random() * 6)
console.log(randomNum)

let age2 = 25

//  if (age >= 13){
//     console.log("You are old enough to enter the site")
//  }else{
//     console.log("You must be 18+ to enter this site")
//  }
let hasLicense = false

// if (age >= 16){
//     console.log("You are old enough to drive")
//     if (hasLicense) {
//         console.log("You have your license")
//     }else {
//         console.log("You dont have a license")
//     }
// }else {
//     console.log("You must be 18+ to get a license")
// }

const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("masterCardBtn")
const paypalBtn = document.getElementById("paypalBtn")
const mySubmit = document.getElementById("mySubmit2")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed`
    } else {
        subResult.textContent = `You are not subscribed`
    }
    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa`
    } else if (mastercardBtn.checked) {
        paymentResult.textContent = `You are paying with Mastercard`
    } else if (paypalBtn.checked) {
        paymentResult.textContent = `You are paying with paypal`
    } else {
        paymentResult.textContent = `You must select a payment method`
    }
}

// let age4 = 21
// let message = age4 >= 18 ? "You are an adult" : "You are a minor"
// console.log(message)
let purchase = 125
let discount = purchase >= 100 ? 10 : 0
console.log(`Your total is ${purchase - purchase * (discount / 100)}`)

let day = 2

switch (day) {
    case 1:
        console.log("Its Sunday")
        break
    case 2:
        console.log("Its Monday")
        break
    case 3:
        console.log("Its Tuesday")
        break
    case 4:
        console.log("Its Wednesday")
        break
    case 5:
        console.log("Its THursday")
        break
    case 6:
        console.log("Its Friday")
        break
    case 7:
        console.log("Its Saturday")
        break
    default:
        console.log(`${day} is not a day`)
        break

}

let userName = "Blissmal"

console.log(userName.charAt(2))
console.log(userName.indexOf("m"))

userName = userName.trim()
userName = userName.toLocaleUpperCase()

console.log(userName)

let phoneNumber = "123-456-8975"

phoneNumber = phoneNumber.replaceAll("-", "/")
console.log(phoneNumber)

const MyName = "Bethuel Maluti"
let FirstName = MyName.slice(0, 7)
let LastName = MyName.slice(8, 14)
console.log(FirstName)
console.log(LastName)


let firstName = MyName.slice(0, MyName.indexOf(" "))
let lastName = MyName.slice(MyName.indexOf(" ") + 1)
console.log(firstName)
console.log(lastName)


let email = "malutibethuel@gmail.com"

let Username = email.slice(0, email.indexOf("@"))
console.log(Username)

// let loggedIn = true
// let UserName
// let password

// do{
//     UserName = window.prompt("Enter your username")
//     password = window.prompt("Enter your password")

//     if(UserName === "myUsername" && password === "myPassword"){
//         loggedIn = true
//         console.log("You are logged in")
//     }else {
//         console.log("Invalid credentials")
//     }
// }while(!loggedIn)

for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

function add(x, y) {
    let result = x + y
    return result
}

console.log(add(4, 6))

const textBox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp


function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "°F"
    } else if (toCelsius.checked) {
        temp = Number(textBox.value)
        temp = (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + "°C"
    } else {
        result.textContent = `Select a unit`
    }
}

let fruits = ["orange", "apple", "banana"]
console.log(fruits)

let numOfFruits = fruits.length
console.log(numOfFruits)

fruits.sort()

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

let numbers = [1, 2, 3, 4, 5]
let maximum = Math.max(...numbers)

console.log(maximum)

function openFridge(...foods) {
    console.log(...foods)
}

const food1 = "pizza"
const food2 = "hamburger"

openFridge(food1, food2)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

const total = sum(1, 3, 5, 6, 7)
console.log(`Your total is ${total}`)

function average(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result / numbers.length
}

console.log(`Your average is ${average(4, 4, 4, 4)}`)

function combineString(...strings) {
    return strings.join(" ")
}

const Name = combineString("Blissmal", "Dangerous", "Hacker")
console.log(Name)

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")

    const values = []
    const images = []

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="dice_images/${value}.svg" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('')

}

function generatePassword(Length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz"
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberchars = "0123456789"
    const symbolchars = "!@#$%^&*()_+"

    let allowedchars = ""
    let password1 = ""

    allowedchars += includeLowerCase ? lowercasechars : ""
    allowedchars += includeUpperCase ? uppercasechars : ""
    allowedchars += includeNumbers ? numberchars : ""
    allowedchars += includeSymbols ? symbolchars : ""

    console.log(allowedchars)

    if (Length <= 0) {
        return `(password length must be atleast one)`
    }
    if (allowedchars.length === 0) {
        return `(Atleast one set of characters need to be selected)`
    }
    for (let i = 0; i < Length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length)
        password1 += allowedchars[randomIndex]

    }

    return password1
}

const passwordLength = 12
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true

const password1 = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)

console.log(`Generated password: ${password1}`)


let Nums = [1, 2, 3, 4, 5]
Nums.forEach(display)
function display(element) {
    console.log(element)
}

const numbers6 = [1, 2, 3, 4, 5]
const squares = numbers6.map(function (element) {
    return Math.pow(element, 2)
})
console.log(squares)



// setTimeout(function(){
//     console.log("Hello")
// }, 3000)

const hello = (name, age) => {
    console.log(`Hello ${name}`)
    console.log(`You are ${age} years old`)
}
hello("Bliss", 20)

const person = {
    firstname: "Blissmal",
    lastName: "Maluti",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log(`Hello i am ${this.firstname}`) // also class name person.firstname works
    }
}

person.sayHello()

function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = () => {
            console.log(`You drive the ${this.model}`)
        }
}

const car1 = new Car("Mercedes", "Benz", 2024, "Red")
const car2 = new Car("Ford", "Mustang", 2023, "Blue")

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

car1.drive()
car2.drive()

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    displayProduct() {
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new Product("shirt", 19.99)
const product2 = new Product("pants", 22.5)

product1.displayProduct()
const Total = product1.calculateTotal(salesTax)
console.log(`Total price (with tax): $${Total.toFixed(2)}`)

product2.displayProduct()
const Total1 = product2.calculateTotal(salesTax)
console.log(`Total price (with tax): $${Total1.toFixed(2)}`)

class MathUtil {
    static PI = 3.14159
    static getDiameter(radius) {
        return radius * 2
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius
    }
}

console.log(MathUtil.PI)
console.log(`Diameter: ${MathUtil.getDiameter(10)}`)
console.log(`The circumference is ${MathUtil.getCircumference(7)}`)

class User {
    static userCount = 0

    constructor(username) {
        this.username = username
        User.userCount++
    }
}
const user1 = new User("Blissmal")
console.log(user1.username)

const user2 = new User("Bethuel")
console.log(user2.username)
console.log(`Total Number of users: ${User.userCount}`)

class Animal {
    alive = true
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal {
    name = "rabbit"
}

class Fish extends Animal {
    name = "fish"
}

class Hawk extends Animal {
    name = "hawk"
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()


console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()

console.log(fish.alive)
fish.eat()
fish.sleep()

console.log(hawk.alive)
hawk.eat()
hawk.sleep()


class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth
        } else {
            console.error("Width must be apositive number")
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight
        } else {
            console.error("height must be apositive number")
        }
    }

    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    get area(){
        return this._height * this._width
    }
}

const rectangle = new Rectangle(4, 5)
console.log(`${rectangle.width}cm`)
console.log(`${rectangle.height}cm`)
console.log(`Area: ${rectangle.area}cm`)

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a)
console.log(b)

const Fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105}
];

console.log(Fruits[2].name)
console.log(Fruits.sort((a, b) => a.calories - b.calories))

const date = new Date()

const year = date.getFullYear()

console.log(year)


function outer(){
    let message = "Hello"
    function inner(){
        console.log(message)
    }
    inner()
}
outer()

function createCounter(){
    let count = 0
    function increament(){
        count++
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count
    }
    return {increament, getCount}
}

const counter = createCounter()
counter.increament()

console.log(`The current count is ${counter.getCount()}`)

function updateClock(){
    const now = new Date()
    let hours = now.getHours().toString().padStart(2, 0)
    const meridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock, 1000)

const Display = document.getElementById("display")
let timer = null
let startTime = 0
let elapsedTime = 0
let isRuning = false

function start(){
   if(!isRuning){
    startTime = Date.now() - elapsedTime
    timer = setInterval(update, 10)
    isRuning = true
   } 

}

function stop(){

}
function reset(){

}
function update(){
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 10)

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    Display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}
