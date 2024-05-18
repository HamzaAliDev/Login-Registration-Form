
// let userEmail = document.getElementById('email')
// let userPassword = document.getElementById('password')
let users =[{
    email: "abc@gmail.com",
    password : "12345"
}]
let user = {
    email: "",
    password : ""
}
// console.log(users);
// users.push(user)

let getValue = value => document.getElementById(value).value
let clearInput = value => document.getElementById(value).value = "" 

function handleRegisterCard(){
    document.getElementById('login-card').style.display = "none";
    document.getElementById('register-card').style.display = "inline-block"
    
    
}


function handleLoginCard() {
    document.getElementById('login-card').style.display = "inline-block";
    document.getElementById('register-card').style.display = "none"
    
}

function handleLoginBtn() {
    let email = getValue('email')
    let password = getValue('password')
    email = email.trim()
    if (email === "" || password === "") {
        alert("Please Enter email and password")
    }else{
        if(users.find(user => user.email === email && user.password === password)){

            alert("login Successfully")
        }else{
            alert("Incorrect Password")
        }
    }
    // console.log(email,password);
    clearInput("email")
    clearInput("password")
    
}


function handleRegisterBtn(){
    let email = getValue('register-email')
    let password = getValue('register-password')
    email = email.trim()
    if (email === "" || password === "") {
        alert("Please Enter email and password")
    }else{
        if(users.find(user => user.email === email && user.password === password)){
            
            alert("Already have account")
        }else{
            user.email = email
            user.password = password
            
            console.log(email,password);
            users.push(user);
            console.log(users);
            alert("registered Successfully")
        }
    }
    clearInput("register-email")
    clearInput("register-password")
}