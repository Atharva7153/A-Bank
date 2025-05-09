export function saveData(user){
    sessionStorage.setItem("user", JSON.stringify(user))
}

export function getData(){
    return JSON.parse(sessionStorage.getItem("user"))
}

export function saveBalance(amount){
    sessionStorage.setItem("balance", JSON.stringify(amount))
}

export function getBalance(){
    return JSON.parse(sessionStorage.getItem("balance"))
}