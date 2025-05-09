console.log("Atharva")
import { getData, getBalance, saveBalance } from "./storage.js"
let data = getData();
console.log(data)
let balance = getBalance();
console.log(balance)
let btn = document.querySelector(".button")
btn.addEventListener("click", ()=>{
    console.log("Clicked")
    let amount = Number(document.querySelector(".inputamount").value)
    console.log(amount)
    let pin = document.querySelector(".inputpin").value 
    console.log(pin)
    if(pin != data.pin){
        alert("You have entered a wrong Pin")
    }
    else{
       balance = balance + amount
       saveBalance(balance);
       alert("Your money has been deposited")
       alert(`Your new balance is ${balance} rupess`)
       
    }
    
    

})