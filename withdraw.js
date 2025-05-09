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
    amount = amount
    console.log(amount)
    let pin = document.querySelector(".inputpin").value 
    console.log(pin)
    if(pin != data.pin){
        alert("You have entered a wrong Pin")
    }
    else{
       console.log(balance)
       balance = balance - amount
       console.log(balance)
       saveBalance(balance);
       alert("Your money has been withdrawned")
       alert(`Your new balance is ${balance} rupess`)
       
    }

})