console.log("Atharva")
import { saveData, saveBalance } from "./storage.js"

let btn = document.querySelector(".btn")
let data = {};
btn.addEventListener("click",()=>{
    data.name = document.querySelector(".name").value 
    data.Dob = document.querySelector(".date").value 
    data.gender = document.querySelector(".gender").value 
    data.pin = document.querySelector(".pin").value 
    console.log(data)  
    saveData(data)
    console.log("Data has been saved")
    let a = Number(20000)
    saveBalance(a);
   
})