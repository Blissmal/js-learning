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

for(let i = 0;i < 100;i++){
    if(i%2 == 1){
        console.log(i)
    }
}

function add(x, y){
    let result = x + y
    return result
}

console.log(add(4,6))

const textBox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp


function convert(){
    if(toFahrenheit.checked){

    }else if(toCelsius.checked){

    }else{
        result.textContent = `Select a unit`
    }
}


