
// let userEmail = document.getElementById('email')
// let userPassword = document.getElementById('password')
let users = [{ email: "abc@gmail.com", password: "12345" }]
// console.log(users);
// users.push(user)

let getValue = value => document.getElementById(value).value
let clearInput = value => document.getElementById(value).value = ""

function handleRegisterCard() {
    document.getElementById('login-card').style.display = "none";
    document.getElementById('register-card').style.display = "inline-block"


}


function handleLoginCard() {
    document.getElementById('login-card').style.display = "inline-block";
    document.getElementById('register-card').style.display = "none"
    clearInput("email")
    clearInput("password")

}

function handleLoginBtn() {
    let email = getValue('email')
    let password = getValue('password')
    email = email.trim()
    if (email === "" || password === "") {
        // alert("Please Enter email and password")
        toast("Please enter Email and Password", "error")
    } else {
        if (users.find(user => user.email === email && user.password === password)) {

            // alert("Login Successfully")
            toast("login Successfully", "success")
            clearInput("email")
            clearInput("password")
        } else {
            // alert("Invalid email or password")
            toast("Invalid email or password", "warn")
        }
    }
    // console.log(email,password);


}


function handleRegisterBtn() {
    let email = getValue('register-email')
    let password = getValue('register-password')
    email = email.trim()
    if (email === "" || password === "") {
        // alert("Please Enter email and password")
        toast("Please enter Email and Password", "error")
    } else {
        if (users.find(user => user.email === email)) {

            // alert("Already have account")
            toast("Already have account", "warn")
        } else {
            let user = { email, password }

            console.log(email, password);
            users.push(user);
            console.log(users);
            // alert("registered Successfully")
            toast("Registered Successfully", "success")
        }
    }
    clearInput("register-email")
    clearInput("register-password")
}



// toastify function
function toast(note, key) {
    let color1;
    let color2;
    switch (key) {
        case "error":
            color1 = "#C71585"
            color2 = "#09203F"
            break;
        case "warn":
            color1 = "#d02d2d"
            color2 = "#09203F"
            break;
        case "success":
            color1 = "#008000"
            color2 = "#09203F"
            break;
        default:
            color1 = "#FFFFFF"
            color2 = "#F0F0F0"
    }

    Toastify({
        text: note,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: `linear-gradient(to right, ${color1},${color2}`,
        },
        onClick: function () { } // Callback after click
    }).showToast();

}