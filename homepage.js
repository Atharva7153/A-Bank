console.log("Atharva")
let number = Math.random();
number = number * 100000
console.log(number)
import { getData,} from "./storage.js"
let data = getData();
console.log(data)

let header = document.querySelector(".header")
header.innerHTML = `Welcome <span class="higlight-green"> ${data.name} ;</span>`

let name = document.querySelector(".name")
name.innerHTML = `Name : <span class="higlight-green"> ${data.name}</span> `

let accNumber = document.querySelector(".accNumber")
accNumber.innerHTML = `Account Number : <span class="higlight-green"> ${number}</span>`

let date = document.querySelector(".date")
date.innerHTML = `DOB : <span class="higlight-green">${data.Dob}</span>`



let left = document.querySelector(".ab")
left.addEventListener("click", ()=>{
    console.log("clicked")
    document.querySelector(".left").style.left = "0%"
    document.querySelector(".ab").style.display = "none"
})


let close = document.querySelector(".close")
close.addEventListener("click", ()=>{
    console.log("clicked")
    document.querySelector(".left").style.left = "-100%"
    document.querySelector(".ab").style.display = "block"
})

let right = document.querySelector(".bc")
right.addEventListener("click", ()=>{
    console.log("clicked")
    document.querySelector(".right").style.right = "0%"
    document.querySelector(".bc").style.display = "none"
})

let close1 = document.querySelector(".close1")
close1.addEventListener("click", ()=>{
    console.log("clicked")
    document.querySelector(".right").style.right = "-100%"
    document.querySelector(".bc").style.display = "block"
})
