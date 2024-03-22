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

document.getElementById("mySubmit").onclick = function(){
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

document.getElementById("mySubmit1").onclick = function(){
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

increaseBtn.onclick = function(){
    count++
    countLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count--
    countLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count
}

let randomNum = Math.floor(Math.random() * 6)
 console.log(randomNum)

 let age2 = 25

 if (age >= 13){
    console.log("You are old enough to enter the site")
 }else{
    console.log("You must be 18+ to enter this site")
 }